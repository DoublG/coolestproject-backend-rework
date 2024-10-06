import { Controller, Get, Body, Delete, Patch } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserDto } from '../dto/user.dto';


@Controller('userinfo')
@ApiTags('userinfo')
export class UserinfoController {

    @Get()
    @ApiResponse({ status: 500, description: 'Internal server error.' })
    getUserInfo(): Promise<UserDto> {
        return null;
    }

    @Delete()
    @ApiResponse({ status: 500, description: 'Internal server error.' })
    deleteUser() {
        return null;
    }

    @Patch()
    @ApiResponse({ status: 500, description: 'Internal server error.' })
    async updateUser(@Body() updateUserDto: UserDto): Promise<UserDto> {
        return null;
    }

}
