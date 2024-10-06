import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegistrationService } from './registration/registration.service';
import { LoginController } from './login/login.controller';
import { UserController } from './user/user.controller';
import { RegistrationController } from './registration/registration.controller';

@Module({
  imports: [],
  controllers: [AppController, RegistrationController, LoginController, UserController],
  providers: [AppService, RegistrationService],
})
export class AppModule {}
