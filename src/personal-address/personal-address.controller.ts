import {
    Controller, UseInterceptors, ClassSerializerInterceptor,
    Get, Param,
} from '@nestjs/common';
import { ApiTags, ApiResponse, ApiOperation } from '@nestjs/swagger';
import { PersonalAddressService } from './personal-address.service';
import { GetPersonalAddressResDto } from './dtos/get-personal-address-res.dto';

@UseInterceptors(ClassSerializerInterceptor)
@ApiTags('Personal Address')
@Controller('pa')
export class PersonalAddressController {
    constructor(
        private readonly paService: PersonalAddressService,
    ) { }

    @ApiOperation({
        summary: 'Get list of personal addresses by user ID',
    })
    @ApiResponse({
        status: 200,
        type: GetPersonalAddressResDto,
    })
    @Get(':id')
    async getUser(@Param('id') id: string): Promise<GetPersonalAddressResDto> {
        return new GetPersonalAddressResDto(this.paService.getPersonalAddressesByUserID(id));
    }
}
