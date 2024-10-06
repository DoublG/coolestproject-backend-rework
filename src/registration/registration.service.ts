import { Injectable } from '@nestjs/common';
import { TshirtGroupDto } from './dto/tshirt-group.dto';
import { QuestionDto } from './dto/question.dto';
import { ApprovalDto } from './dto/approval.dto';
import { SettingDto } from './dto/setting.dto';
import { RegistrationDto } from './dto/registration.dto';
import { AttachmentDto } from './dto/attachment.dto';
import { SASToken } from './dto/sas-token.dto';

@Injectable()
export class RegistrationService {

    findAllTshirts(): Promise<TshirtGroupDto[]> {
        return null;
    }

    findAllQuestions(): Promise<QuestionDto[]> {
        return null;
    }

    findAllApprovals(): Promise<ApprovalDto[]> {
        return null;
    }
    
    getSettings(): Promise<SettingDto> {
        return null;
    }

    create(createRegistrationDto: RegistrationDto) {
        return null;
    }

    createParticipant(){
        return null;
    }

    createAttachment(createAttachmentDto: AttachmentDto): Promise<SASToken> {
        return null;
    }
}
