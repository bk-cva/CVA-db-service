import { Exclude } from 'class-transformer';
import { UserEntity } from '../entities/user.entity';

@Exclude()
export class GetUserResDto extends UserEntity {}
