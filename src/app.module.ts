import { Module } from '@nestjs/common';
import { CalendarModule } from './calendar/calendar.module';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './database/database.module';
import { PersonalAddressModule } from './personal-address/personal-address.module';

@Module({
    imports: [CalendarModule, UserModule, DatabaseModule, PersonalAddressModule],
})
export class AppModule {}
