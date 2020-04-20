import { Controller, Get, Param, UseInterceptors, ClassSerializerInterceptor } from '@nestjs/common';
import { ApiTags, ApiResponse, ApiOperation, ApiParam } from '@nestjs/swagger';
import { CalendarService } from './calendar.service';
import { ListEventsDto } from './dtos/list-events.dto';
import { GetEventDto } from './dtos/get-event.dto';

@UseInterceptors(ClassSerializerInterceptor)
@ApiTags('Calendar')
@Controller('calendar')
export class CalendarController {
    constructor(
        private readonly calendarService: CalendarService,
    ) { }

    @ApiOperation({
        summary: 'Get a list of events',
    })
    @ApiResponse({
        status: 200,
        type: ListEventsDto,
    })
    @Get('list')
    async getListEvents(): Promise<ListEventsDto> {
        return new ListEventsDto(await this.calendarService.listEvents());
    }

    @ApiOperation({
        summary: 'Get an event by ID',
        description: 'The ID can be received by getting the list of events',
    })
    @ApiResponse({
        status: 200,
        type: GetEventDto,
    })
    @Get(':id')
    async getEvent(@Param('id') id: string): Promise<GetEventDto> {
        return new GetEventDto(await this.calendarService.getOneEvent(id));
    }
}
