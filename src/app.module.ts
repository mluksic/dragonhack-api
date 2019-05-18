import { Module } from '@nestjs/common';
import { DeviceModule } from './modules/devices/device.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from './database.module';

@Module({
    imports: [DatabaseModule, DeviceModule],
    providers: [],
})
export class AppModule {}
