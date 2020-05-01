import { Module } from '@nestjs/common';
import * as knex from 'knex';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { ConfigService } from '../config/config.service';
import { ConfigModule } from '../config/config.module';
import { DatabaseModule } from '../database/database.module';

const pgConfig = (configService: ConfigService) => ({
    host: configService.get('PG_HOST'),
    database: configService.get('PG_DATABASE'),
    user: configService.get('PG_USERNAME'),
    password: configService.get('PG_PASSWORD'),
    port: 5432,
    timezone: '+00:00',
    ssl: {
        rejectUnauthorized: false,
    },
});

@Module({
    imports: [ConfigModule, DatabaseModule],
    controllers: [UserController],
    providers: [
        UserService,
    ],
})
export class UserModule {}
