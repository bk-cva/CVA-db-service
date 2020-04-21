import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class ListEventsReqDto {
    @ApiProperty({
        description: 'The calendar ID can be received by calling the list calendars API',
    })
    @IsString()
    readonly calendarId: string;
}
