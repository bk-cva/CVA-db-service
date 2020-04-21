import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { Entity } from '../../common/classes/Entity.class';
import { CalendarEntity } from '../entities/calendar.entity';

export class ListCalendarsResDto extends Entity {
    @ApiProperty({
        isArray: true,
        type: CalendarEntity,
    })
    @Type(() => CalendarEntity)
    readonly items: CalendarEntity[];
}
