import { Controller, Get } from '@nestjs/common';
@Controller('admin')
export class AdminController {

    @Get()
    helloWorld(): string {
        return "hello world";
    }
}
