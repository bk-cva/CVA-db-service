import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class DeleteEventReqDto {
    @ApiProperty({
        description: 'The calendar ID can be received by calling the list calendars API',
    })
    @IsString()
    readonly calendarId: string;

    @ApiProperty({
        description: 'The event ID can be received by calling the list events API',
    })
    @IsString()
    readonly eventId: string;
}
