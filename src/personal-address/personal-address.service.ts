import { Injectable, Inject } from '@nestjs/common';
import * as knex from 'knex';

@Injectable()
export class PersonalAddressService {
    constructor(@Inject('KNEX') private readonly queryBuilder: knex) { }

    async getPersonalAddressesByUserID(queryObject: any) {
        const query = this.queryBuilder('cva.personal_address');
        const {
            id,
        } = queryObject;
        if (id) {
            query.where('user_id', id);
        }
        return new Promise((resolve, reject) => {
            query.then((pa) => {
                if (pa.length > 0) {
                    resolve({
                        items: pa,
                    });
                    return;
                }
                reject('User not found.');
            })
        });
    }
}
