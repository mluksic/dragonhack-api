import { Module } from '@nestjs/common';
import { DeviceModule } from './modules/devices/device.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CampaignModule } from './modules/campaign/campaign.module';
import { AdController } from './modules/ad/ad.controller';
import { AdService } from './modules/ad/ad.service';
import { AdModule } from './modules/ad/ad.module';

@Module({
    imports: [TypeOrmModule.forRoot(), DeviceModule, CampaignModule, AdModule],
    providers: [],
    controllers: [],
})
export class AppModule {}
