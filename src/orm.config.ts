import { join } from 'path';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const withCache: TypeOrmModuleOptions = {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: 5432,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DB,
    synchronize: true,
    entities: [join(__dirname, './**/*.entity{.ts,.js}')],
};
