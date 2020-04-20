import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { Entity } from '../../common/classes/Entity.class';
import { EventEntity } from '../entities/event.entity';

export class ListEventsDto extends Entity {
    @ApiProperty({
        isArray: true,
        type: EventEntity,
    })
    @Type(() => EventEntity)
    readonly events: EventEntity[];
}
