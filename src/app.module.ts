import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegistrationService } from './registration/registration.service';
import { RegistrationController } from './registration/registration.controller';
import { ProjectinfoController } from './projectinfo/projectinfo.controller';
import { UserinfoController } from './userinfo/userinfo.controller';
import { AttachmentController } from './attachment/attachment.controller';
import { ParticipantController } from './participant/participant.controller';
import { LoginController } from './login/login.controller';
import { MailerService } from './mailer/mailer.service';

const DEFAULT_ADMIN = {
  email: 'admin@example.com',
  password: 'password',
}

const authenticate = async (email: string, password: string) => {
  if (email === DEFAULT_ADMIN.email && password === DEFAULT_ADMIN.password) {
    return Promise.resolve(DEFAULT_ADMIN)
  }
  return null
}

@Module({
  imports: [
    // AdminJS version 7 is ESM-only. In order to import it, you have to use dynamic imports.
    import('@adminjs/nestjs').then(({ AdminModule }) => AdminModule.createAdminAsync({
      useFactory: () => ({
        adminJsOptions: {
          rootPath: '/admin',
          resources: [],
        },
        auth: {
          authenticate,
          cookieName: 'adminjs',
          cookiePassword: 'secret'
        },
        sessionOptions: {
          resave: true,
          saveUninitialized: true,
          secret: 'secret'
        },
      }),
    })),
  ],
  controllers: [AppController, RegistrationController, ProjectinfoController, UserinfoController, AttachmentController, ParticipantController, LoginController],
  providers: [AppService, RegistrationService, MailerService],
})
export class AppModule {}
