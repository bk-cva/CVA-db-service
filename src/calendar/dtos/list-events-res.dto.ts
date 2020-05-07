import { ApiProperty } from '@nestjs/swagger';
import { Type, Exclude, Expose } from 'class-transformer';
import { Entity } from '../../common/classes/Entity.class';
import { EventEntity } from '../entities/event.entity';

@Exclude()
export class ListEventsResDto extends Entity {
    @ApiProperty({
        isArray: true,
        type: EventEntity,
    })
    @Expose()
    @Type(() => EventEntity)
    readonly items: EventEntity[];
}
