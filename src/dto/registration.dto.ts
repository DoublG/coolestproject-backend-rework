import { OtherProjectDto } from './other-project.dto';
import { OwnProjectDto } from './own-project.dto';
import { AttachmentDto } from './attachment.dto';


export class RegistrationDto {
    own_project: OwnProjectDto;
    other_project: OtherProjectDto;
    attachments: AttachmentDto[];
}