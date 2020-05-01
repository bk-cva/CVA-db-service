import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { Entity } from '../../common/classes/Entity.class';

@Exclude()
export class PersonalAddressEntity extends Entity {
    @ApiProperty()
    @Expose()
    readonly user_id: string;

    @ApiProperty({
        example: 'nhà',
    })
    @Expose()
    readonly name: string;

    @ApiProperty()
    @Expose()
    readonly address_number: string;

    @ApiProperty()
    @Expose()
    readonly street: string;

    @ApiProperty()
    @Expose()
    readonly ward: string;

    @ApiProperty()
    @Expose()
    readonly district: number;

    @ApiProperty()
    @Expose()
    readonly province: string;

    @ApiProperty()
    @Expose()
    readonly nation: string;
}
