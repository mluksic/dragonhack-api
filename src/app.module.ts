import { Module } from '@nestjs/common';
import { DeviceModule } from './modules/devices/device.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdModule } from './modules/ad/ad.module';
import { ReportModule } from './modules/reports/report.module';
import { withCache } from './orm.config';

@Module({
    imports: [TypeOrmModule.forRoot(withCache), DeviceModule, AdModule, ReportModule],
    providers: [],
})
export class AppModule {}
