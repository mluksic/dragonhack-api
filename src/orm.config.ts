import { join } from 'path';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import * as fs from 'fs';

const environment = process.env.NODE_ENV || 'development';
const data: any = dotenv.parse(fs.readFileSync(`.env`));

export const withCache: TypeOrmModuleOptions = {
    type: 'postgres',
    host: data.DB_HOST,
    port: 5432,
    username: data.DB_USER,
    password: data.DB_PASSWORD,
    database: data.DB_NAME,
    synchronize: true,
    entities: [join(__dirname, './**/*.entity{.ts,.js}')],
};
