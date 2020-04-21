import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { Entity } from '../../common/classes/Entity.class';

@Exclude()
export class CalendarEntity extends Entity {
    @ApiProperty()
    @Expose()
    readonly kind: string;

    @ApiProperty()
    @Expose()
    readonly id: string;

    @ApiProperty()
    @Expose()
    readonly summary: string;

    @ApiProperty()
    @Expose()
    readonly timeZone: string;

    @ApiProperty()
    @Expose()
    readonly summaryOverride: string;

    @ApiProperty()
    @Expose()
    readonly colorId: string;

    @ApiProperty()
    @Expose()
    readonly backgroundColor: string;

    @ApiProperty()
    @Expose()
    readonly foregroundColor: string;

    @ApiProperty()
    @Expose()
    readonly selected: boolean;

    @ApiProperty()
    @Expose()
    readonly defaultReminders: any;

    @ApiProperty()
    @Expose()
    readonly conferenceProperties: any;
}
