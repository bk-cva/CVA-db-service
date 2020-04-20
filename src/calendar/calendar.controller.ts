import { Controller, Get, Param, UseInterceptors, ClassSerializerInterceptor } from '@nestjs/common';
import { CalendarService } from './calendar.service';
import { ListEventsDto } from './dtos/list-events.dto';
import { GetEventDto } from './dtos/get-event.dto';

@UseInterceptors(ClassSerializerInterceptor)
@Controller('calendar')
export class CalendarController {
    constructor(
        private readonly calendarService: CalendarService,
    ) { }

    @Get('list')
    async getListEvents(): Promise<ListEventsDto> {
        return new ListEventsDto(await this.calendarService.listEvents());
    }

    @Get(':id')
    async getEvent(@Param('id') id: string): Promise<GetEventDto> {
        return new GetEventDto(await this.calendarService.getOneEvent(id));
    }
}
