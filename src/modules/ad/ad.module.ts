import { Module } from '@nestjs/common';
import { Ad } from './ad.entity';
import { AdController } from './ad.controller';
import { AdService } from './ad.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([Ad])],
    controllers: [AdController],
    providers: [AdService],
})
export class AdModule {}
