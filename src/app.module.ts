import { Module } from '@nestjs/common';
import { DeviceModule } from './modules/devices/device.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forRoot(), DeviceModule],
    providers: [],
})
export class AppModule {}
