import { Exclude} from 'class-transformer';
import { EventEntity } from '../entities/event.entity';

@Exclude()
export class GetEventResDto extends EventEntity {}
