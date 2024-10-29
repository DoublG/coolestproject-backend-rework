import { Controller, Post } from '@nestjs/common';
import { ApiResponse, ApiTags, ApiCookieAuth } from '@nestjs/swagger';
@Controller('participant')
@ApiTags('participant')
@ApiCookieAuth()
export class ParticipantController {
  @Post()
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  async createParticipant() {
    return null; //this.registrationService.createParticipant();
  }
}
