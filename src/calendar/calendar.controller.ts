import {
    Controller, UseInterceptors, ClassSerializerInterceptor,
    Get, Post, Query, Body, Delete,
} from '@nestjs/common';
import { ApiTags, ApiResponse, ApiOperation } from '@nestjs/swagger';
import { CalendarService } from './calendar.service';
import { ListCalendarsResDto } from './dtos/list-calendars-res.dto';
import { ListEventsResDto } from './dtos/list-events-res.dto';
import { ListEventsReqDto } from './dtos/list-events-req.dto';
import { GetEventResDto } from './dtos/get-event-res.dto';
import { GetEventReqDto } from './dtos/get-event-req.dto';
import { CreateEventReqDto } from './dtos/create-event-req.dto';
import { DeleteEventReqDto } from './dtos/delete-event-req.dto';

@UseInterceptors(ClassSerializerInterceptor)
@ApiTags('Calendar')
@Controller('calendar')
export class CalendarController {
    constructor(
        private readonly calendarService: CalendarService,
    ) { }

    @ApiOperation({
        summary: 'Get a list of calendars',
    })
    @ApiResponse({
        status: 200,
        type: ListCalendarsResDto,
    })
    @Get()
    async getListCalendars(): Promise<ListCalendarsResDto> {
        return new ListCalendarsResDto(await this.calendarService.listCalendars());
    }

    @ApiOperation({
        summary: 'Get a list of events on a calendar',
    })
    @ApiResponse({
        status: 200,
        type: ListEventsResDto,
    })
    @Get('event/list')
    async getListEvents(@Query() query: ListEventsReqDto): Promise<ListEventsResDto> {
        return new ListEventsResDto(await this.calendarService.listEvents(query.calendarId));
    }

    @ApiOperation({
        summary: 'Get an event by ID',
    })
    @ApiResponse({
        status: 200,
        type: GetEventResDto,
    })
    @Get('event')
    async getEvent(@Query() query: GetEventReqDto): Promise<GetEventResDto> {
        return new GetEventResDto(await this.calendarService.getEvent(query.calendarId, query.eventId));
    }

    @ApiOperation({
        summary: 'Create an event',
    })
    @Post('event')
    async createEvent(@Body() query: CreateEventReqDto): Promise<any> {
        return await this.calendarService.createEvent(query);
    }

    @ApiOperation({
        summary: 'Delete an event',
    })
    @Delete('event')
    async deleteEvent(@Body() query: DeleteEventReqDto): Promise<any> {
        return await this.calendarService.deleteEvent(query.calendarId, query.eventId);
    }
}
