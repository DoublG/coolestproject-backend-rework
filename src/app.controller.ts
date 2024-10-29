import { AppService } from './app.service';
import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { TshirtGroupDto } from './dto/tshirt-group.dto';
import { QuestionDto } from './dto/question.dto';
import { ApprovalDto } from './dto/approval.dto';
import { SettingDto } from './dto/setting.dto';

@Controller()
@ApiTags('app')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('tshirts')
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  findAllTshirts(): Promise<TshirtGroupDto[]> {
    return this.appService.findAllTshirts();
  }

  @Get('questions')
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  findAllQuestions(): Promise<QuestionDto[]> {
    return null; //this.registrationService.findAllQuestions();
  }

  @Get('approvals')
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  findAllApprovals(): Promise<ApprovalDto[]> {
    return null;// this.registrationService.findAllApprovals();
  }

  @Get('settings')
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  getSettings(): Promise<SettingDto> {
    return null; // this.registrationService.getSettings();
  }

}
