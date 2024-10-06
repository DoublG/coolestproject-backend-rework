import { Controller, Get, Body, Post, Param, Delete, Patch  } from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { TshirtGroupDto } from './dto/tshirt-group.dto';
import { QuestionDto } from './dto/question.dto';
import { ApprovalDto } from './dto/approval.dto';
import { SettingDto } from './dto/setting.dto';
import { RegistrationService } from './registration.service';
import { RegistrationDto } from './dto/registration.dto';
import { AttachmentDto } from './dto/attachment.dto';
import { SASToken } from './dto/sas-token.dto';
import { UserDto } from './dto/user.dto';
import { ProjectDto } from './dto/project.dto';
import { LoginActivateDto } from './dto/login-activate.dto';
import { LoginDto } from './dto/login.dto';
import { LoginMailDto } from './dto/logon-mail.dto';

@Controller('registration')
@ApiTags('registration')
export class RegistrationController {
    constructor(private registrationService: RegistrationService) {}


    @Get('tshirts')
    @ApiResponse({ status: 500, description: 'Internal server error.'})
    findAllTshirts(): Promise<TshirtGroupDto[]> {
        return this.registrationService.findAllTshirts();
    }

    @Get('questions')
    @ApiResponse({ status: 500, description: 'Internal server error.'})
    findAllQuestions(): Promise<QuestionDto[]> {
        return this.registrationService.findAllQuestions();
    }

    @Get('approvals')
    @ApiResponse({ status: 500, description: 'Internal server error.'})
    findAllApprovals(): Promise<ApprovalDto[]> {
        return this.registrationService.findAllApprovals();
    }

    @Get('settings')
    @ApiResponse({ status: 500, description: 'Internal server error.'})
    getSettings(): Promise<SettingDto> {
        return this.registrationService.getSettings();
    }

    @Post()
    @ApiResponse({ status: 500, description: 'Internal server error.'})
    async create(@Body() createRegistrationDto: RegistrationDto) {
        this.registrationService.create(createRegistrationDto);
    }

    @Post("participant")
    @ApiResponse({ status: 500, description: 'Internal server error.'})
    async createParticipant() {
        this.registrationService.createParticipant();
    }

    @Post("attachments")
    @ApiResponse({ status: 500, description: 'Internal server error.'})
    async createAttachment(@Body() createAttachmentDto: AttachmentDto) : Promise<SASToken> {
        return this.registrationService.createAttachment(createAttachmentDto);
    }

    @Post("/attachments/:name/sas")
    @ApiResponse({ status: 500, description: 'Internal server error.'})
    async createSASToken(@Param() name: any) : Promise<SASToken> {
        return null;
    }

    @Delete("/attachments/:name")
    @ApiResponse({ status: 500, description: 'Internal server error.'})
    async deleteAttachment(@Param() name: any) {
        return null;
    }

    @Get('userinfo')
    @ApiResponse({ status: 500, description: 'Internal server error.'})
    getUserInfo(): Promise<UserDto> {
        return null;
    }

    @Delete('userinfo')
    @ApiResponse({ status: 500, description: 'Internal server error.'})
    deleteUser() {
        return null;
    }

    @Patch("userinfo")
    @ApiResponse({ status: 500, description: 'Internal server error.'})
    async updateUser(@Body() updateUserDto: UserDto) : Promise<UserDto> {
        return null;
    }

    @Get("projectinfo")
    @ApiResponse({ status: 500, description: 'Internal server error.'})
    async getProject() : Promise<ProjectDto> {
        return null;
    }

    @Post("projectinfo")
    @ApiResponse({ status: 500, description: 'Internal server error.'})
    async createProject(@Body() createProjectDto: ProjectDto) : Promise<ProjectDto> {
        return null;
    }

    @Patch("projectinfo")
    @ApiResponse({ status: 500, description: 'Internal server error.'})
    async updateProject(@Body() updateProjectDto: ProjectDto) : Promise<ProjectDto> {
        return null;
    }

    @Delete("projectinfo")
    @ApiResponse({ status: 500, description: 'Internal server error.'})
    async deleteProject() {
        return null;
    }

    @Post("login")
    @ApiResponse({ status: 500, description: 'Internal server error.'})
    async activateLogin(@Body() loginActivateDto: LoginActivateDto) : Promise<LoginDto> {
        return null;
    }

    @Post("logout")
    @ApiResponse({ status: 500, description: 'Internal server error.'})
    async logout() {
        return null;
    }

    @Post("mailToken")
    @ApiResponse({ status: 500, description: 'Internal server error.'})
    async mailToken(@Body() loginMailDto: LoginMailDto) {
        return null;
    }
}
