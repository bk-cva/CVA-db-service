import { InternalServerErrorException } from '@nestjs/common';

export class Entity {
    constructor(partial: object) {
        if (typeof partial === 'object') {
            Object.assign(this, partial);
            return;
        }
        throw new InternalServerErrorException();
    }
}
