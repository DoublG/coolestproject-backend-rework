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
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './models/user.model';
import { Event } from './models/event.model';
import { Tshirt } from './models/tshirt.model';
import { EventTable } from './models/event_table.model';
import { ProjectTable } from './models/project_table.model';
import { Question } from './models/question.model';
import { QuestionUser } from './models/question_user.model';
import { QuestionRegistration } from './models/question_registration.model';
import { Project } from './models/project.model';
import { Location } from './models/location.model';
import { Registration } from './models/registration.model';
import { TshirtGroup } from './models/tshirt_group.model';
import { TshirtGroupTranslation } from './models/tshirt_group_translation.model';
import { TshirtTranslation } from './models/tshirt_translation.model';
import { QuestionTranslation } from './models/question_translation.model';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AzureBlobService } from './azureblob/azureblob.service';
import { TokensService } from './tokens/tokens.service';
import { Voucher } from './models/voucher.model';
import { AzureBlob } from './models/azure_blob.model';
import { Attachment } from './models/attachment.model';
import { Hyperlink } from './models/hyperlink.model';
import { Certificate } from './models/certificate.model';
import { Message } from './models/message.model';
import { Vote } from './models/vote.model';
import { VoteCategory } from './models/vote_category.model';
import { Account } from './models/account.model';

const DEFAULT_ADMIN = {
  email: 'admin@example.com',
  password: 'password',
};

const authenticate = async (email: string, password: string) => {
  if (email === DEFAULT_ADMIN.email && password === DEFAULT_ADMIN.password) {
    return Promise.resolve(DEFAULT_ADMIN);
  }
  return null;
};

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Makes the config available globally
    }),
    // AdminJS version 7 is ESM-only. In order to import it, you have to use dynamic imports.
    import('@adminjs/nestjs').then(({ AdminModule }) =>
      AdminModule.createAdminAsync({
        useFactory: () => ({
          adminJsOptions: {
            rootPath: '/admin',
            resources: [],
          },
          auth: {
            authenticate,
            cookieName: 'adminjs',
            cookiePassword: 'secret',
          },
          sessionOptions: {
            resave: true,
            saveUninitialized: true,
            secret: 'secret',
          },
        }),
      }),
    ),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule], // Import ConfigModule to access ConfigService
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        return {
          dialect: 'postgres',
          host: configService.get('DB_HOST') || 'db',
          port: configService.get('DB_PORT') || 5432,
          username: configService.get('DB_USER') || 'coolestproject',
          password: configService.get('DB_PASS') || 'coolestproject',
          database: configService.get('DB_NAME') || 'coolestproject',
          synchronize: true,
          autoLoadModels: true,
          models: [
            Event,
            User,
            Registration,
            Tshirt,
            Question,
            QuestionUser,
            QuestionRegistration,
            Project,
            Location,
            TshirtGroup,
            TshirtGroupTranslation,
            TshirtTranslation,
            QuestionTranslation,
            EventTable,
            ProjectTable,
            Voucher,
            AzureBlob,
            Attachment,
            Hyperlink,
            Certificate,
            Message,
            Vote,
            VoteCategory,
            Account,
          ],
        };
      },
    }),
    SequelizeModule.forFeature([
      TshirtGroup,
      Question,
      Event,
      Registration,
      User,
    ]),
  ],
  controllers: [
    AppController,
    RegistrationController,
    ProjectinfoController,
    UserinfoController,
    AttachmentController,
    ParticipantController,
    LoginController,
  ],
  providers: [
    AppService,
    RegistrationService,
    MailerService,
    AzureBlobService,
    TokensService,
  ],
})
export class AppModule {}
