import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsOptional, IsDateString, IsBoolean } from 'class-validator';

export class CreateEventReqDto {
    @ApiProperty()
    @IsString()
    readonly calendarId: string;

    @ApiProperty()
    @IsString()
    readonly summary: string;

    @ApiPropertyOptional({
        description: 'Geographic location of the event as free-form text',
    })
    @IsOptional()
    @IsString()
    readonly location: string;

    @ApiProperty({
        example: '2020-01-01T00:00:00+07:00',
    })
    @IsDateString()
    readonly start: string;

    @ApiPropertyOptional({
        example: '2020-01-01T00:00:00+07:00',
    })
    @IsDateString()
    readonly end: string;

    @ApiPropertyOptional({
        default: true,
    })
    @IsOptional()
    @IsBoolean()
    readonly useDefaultReminders: boolean = true;
}
