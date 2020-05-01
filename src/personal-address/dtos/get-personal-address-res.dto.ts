import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { PersonalAddressEntity } from '../entities/personal-address.entity';
import { Entity } from '../../common/classes/Entity.class';

export class GetPersonalAddressResDto extends Entity {
    @ApiProperty({
        isArray: true,
        type: PersonalAddressEntity,
    })
    @Type(() => PersonalAddressEntity)
    readonly items: PersonalAddressEntity[];
}
