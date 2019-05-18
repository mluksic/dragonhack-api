import { Injectable } from '@nestjs/common';
import { Campaign } from './campaign.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { RepositoryService } from '@nestjsx/crud/typeorm';

@Injectable()
export class CampaignService extends RepositoryService<Campaign> {
    constructor(@InjectRepository(Campaign) repository) {
        super(repository);
    }
}
