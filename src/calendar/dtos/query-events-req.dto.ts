import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsDateString, IsOptional } from 'class-validator';

export class QueryEventsReqDto {
    @ApiProperty({
        description: 'The calendar ID can be received by calling the list calendars API',
    })
    @IsString()
    readonly calendarId: string;

    @ApiPropertyOptional({
        description: `Free text search terms to find events that match these terms in any field, except for extended properties. Optional.`,
    })
    @IsOptional()
    @IsString()
    readonly q: string;

    @ApiPropertyOptional({
        description: `Lower bound (exclusive) for an event's end time to filter by. Optional. The default is not to filter by end time. Must be an RFC3339 timestamp with mandatory time zone offset, for example, 2011-06-03T10:00:00-07:00, 2011-06-03T10:00:00Z. Milliseconds may be provided but are ignored. If timeMax is set, timeMin must be smaller than timeMax.`,
        example: '2011-06-03T10:00:00-07:00',
    })
    @IsOptional()
    @IsString()
    readonly timeMin: string;

    @ApiPropertyOptional({
        description: `Upper bound (exclusive) for an event's start time to filter by. Optional. The default is not to filter by start time. Must be an RFC3339 timestamp with mandatory time zone offset, for example, 2011-06-03T10:00:00-07:00, 2011-06-03T10:00:00Z. Milliseconds may be provided but are ignored. If timeMin is set, timeMax must be greater than timeMin.`,
        example: '2011-06-03T10:00:00-07:00',
    })
    @IsOptional()
    @IsString()
    readonly timeMax: string;
}
