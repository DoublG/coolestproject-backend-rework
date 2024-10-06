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
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [AdminModule],
  controllers: [AppController, RegistrationController, ProjectinfoController, UserinfoController, AttachmentController, ParticipantController, LoginController],
  providers: [AppService, RegistrationService, MailerService],
})
export class AppModule {}
