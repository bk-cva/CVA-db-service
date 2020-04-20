import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { Entity } from '../../common/classes/Entity.class';

@Exclude()
export class EventEntity extends Entity {
    @ApiProperty()
    @Expose()
    readonly kind: string;

    @ApiProperty()
    @Expose()
    readonly id: string;

    @ApiProperty()
    @Expose()
    readonly status: string;

    @ApiProperty()
    @Expose()
    readonly created: string;

    @ApiProperty()
    @Expose()
    readonly updated: string;

    @ApiProperty()
    @Expose()
    readonly summary: string;

    @ApiProperty()
    @Expose()
    readonly creator: {
        email: string,
        self: boolean,
    };

    @ApiProperty()
    @Expose()
    readonly organizer: {
        email: string,
        self: boolean,
    };

    @ApiProperty()
    @Expose()
    readonly start: {
        dateTime: string,
        timeZone: boolean,
    };

    @ApiProperty()
    @Expose()
    readonly end: {
        dateTime: string,
        timeZone: boolean,
    };
}
