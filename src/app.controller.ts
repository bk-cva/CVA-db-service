import { Controller, Get, Param, UseInterceptors, ClassSerializerInterceptor } from '@nestjs/common';
import { CalendarService } from './calendar/calendar.service';
import { ListEventsDto } from './calendar/dtos/list-events.dto';
import { GetEventDto } from './calendar/dtos/get-event.dto';

@UseInterceptors(ClassSerializerInterceptor)
@Controller('calendar')
export class AppController {
    constructor(
        private readonly calendarService: CalendarService,
    ) {}

    @Get('list')
    async getListEvents(): Promise<ListEventsDto> {
        return new ListEventsDto(await this.calendarService.listEvents());
    }

    @Get(':id')
    async getEvent(@Param('id') id: string): Promise<GetEventDto> {
        return new GetEventDto(await this.calendarService.getOneEvent(id));
    }
}
