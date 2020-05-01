import { Module } from '@nestjs/common';
import { PersonalAddressController } from './personal-address.controller';
import { PersonalAddressService } from './personal-address.service';
import { DatabaseModule } from '../database/database.module';

@Module({
    imports: [DatabaseModule],
    controllers: [PersonalAddressController],
    providers: [PersonalAddressService]
})
export class PersonalAddressModule {}
