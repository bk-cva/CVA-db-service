import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CalendarService } from './calendar/calendar.service';

@Module({
    imports: [],
    controllers: [AppController],
    providers: [CalendarService],
})
export class AppModule {}
