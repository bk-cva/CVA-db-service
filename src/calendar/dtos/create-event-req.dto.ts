import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsOptional, ValidateNested, IsDateString } from 'class-validator';

export class CreateEventReqDto {
    @ApiProperty()
    @IsString()
    readonly calendarId: string;

    @ApiProperty()
    @IsString()
    readonly summary: string;

    @ApiPropertyOptional()
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
}
