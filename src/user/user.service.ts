import { Injectable, Inject, NotFoundException, BadRequestException } from '@nestjs/common';
import * as knex from 'knex';

@Injectable()
export class UserService {
    constructor(@Inject('KNEX') private readonly queryBuilder: knex) { }

    async getUser(queryObject: any) {
        const query = this.queryBuilder('cva.user');
        const {
            id,
        } = queryObject;
        if (id) {
            query.where('user_id', id);
        }
        return new Promise((resolve, reject) => {
            query.then((users) => {
                if (users.length > 0) {
                    resolve(users[0]);
                    return;
                }
                reject('User not found.');
            })
        });
    }
}
