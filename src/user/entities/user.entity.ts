import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { Entity } from '../../common/classes/Entity.class';

@Exclude()
export class UserEntity extends Entity {
    @ApiProperty()
    @Expose()
    readonly user_id: string;

    @ApiProperty()
    @Expose()
    readonly first_name: string;

    @ApiProperty()
    @Expose()
    readonly last_name: string;

    @ApiProperty()
    @Expose()
    readonly email: string;

    @ApiProperty()
    @Expose()
    readonly age: number;

    @ApiProperty()
    @Expose()
    readonly phone: string;
}
