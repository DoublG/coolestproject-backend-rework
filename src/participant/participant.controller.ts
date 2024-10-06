import { Controller, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
@Controller('participant')
@ApiTags('participant')
export class ParticipantController {

    @Post()
    @ApiResponse({ status: 500, description: 'Internal server error.' })
    async createParticipant() {
        return null; //this.registrationService.createParticipant();
    }

}
