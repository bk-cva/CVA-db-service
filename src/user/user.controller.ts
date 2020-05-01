import {
    Controller, UseInterceptors, ClassSerializerInterceptor,
    Get, Param,
} from '@nestjs/common';
import { ApiTags, ApiResponse, ApiOperation } from '@nestjs/swagger';
import { UserService } from './user.service';
import { GetUserResDto } from './dtos/get-user-res.dto';

@UseInterceptors(ClassSerializerInterceptor)
@ApiTags('User')
@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService,
    ) { }

    @ApiOperation({
        summary: 'Get a user by ID',
    })
    @ApiResponse({
        status: 200,
        type: GetUserResDto,
    })
    @Get(':id')
    async getUser(@Param('id') id: string): Promise<GetUserResDto> {
        return new GetUserResDto(this.userService.getUser(id));
    }
}
