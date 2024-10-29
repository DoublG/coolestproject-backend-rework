import { Controller, Body, Post, Param, Delete } from '@nestjs/common';
import { ApiResponse, ApiTags, ApiCookieAuth } from '@nestjs/swagger';
import { AttachmentDto } from '../dto/attachment.dto';
import { SASToken } from '../dto/sas-token.dto';

@Controller('attachment')
@ApiTags('attachment')
@ApiCookieAuth()
export class AttachmentController {
  @Post('attachments')
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  async createAttachment(
    @Body() createAttachmentDto: AttachmentDto,
  ): Promise<SASToken> {
    return null; //this.registrationService.createAttachment(createAttachmentDto);
  }

  @Post('/attachments/:name/sas')
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  async createSASToken(@Param() name: any): Promise<SASToken> {
    return null;
  }

  @Delete('/attachments/:name')
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  async deleteAttachment(@Param() name: any) {
    return null;
  }
}
