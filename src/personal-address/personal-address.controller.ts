import { Controller, Param, Get } from '@nestjs/common';
import { PersonalAddressService } from './personal-address.service';

@Controller('pa')
export class PersonalAddressController {
    constructor(
        private readonly paService: PersonalAddressService,
    ) { }

    @Get(':id')
    async getUser(@Param('id') id: string): Promise<any> {
        return this.paService.getPersonalAddressesByUserID(id);
    }
}
