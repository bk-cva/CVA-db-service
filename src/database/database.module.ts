import { Module } from '@nestjs/common';
import * as knex from 'knex';
import { ConfigService } from '../config/config.service';
import { ConfigModule } from '../config/config.module';

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
    imports: [ConfigModule],
    providers: [
        {
            provide: 'KNEX',
            inject: [ConfigService],
            useFactory: async (configService: ConfigService) => {
                return knex({
                    client: 'pg',
                    connection: pgConfig(configService),
                    pool: {
                        min: 1,
                        max: 1,
                    },
                });
            },
        },
    ],
    exports: [
        {
            provide: 'KNEX',
            useExisting: true,
        },
    ]
})
export class DatabaseModule {}
