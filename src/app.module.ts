import { Module } from '@nestjs/common';
import { CalendarModule } from './calendar/calendar.module';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './database/database.module';

@Module({
    imports: [CalendarModule, UserModule, DatabaseModule],
})
export class AppModule {}
