import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService,
    ) { }

    @Get(':id')
    async getUser(@Param('id') id: string): Promise<any> {
        return this.userService.getUser(id);
    }
}
