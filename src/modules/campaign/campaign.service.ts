import { Injectable } from '@nestjs/common';
import { Campaign } from './campaign.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { RepositoryService } from '@nestjsx/crud/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CampaignService extends RepositoryService<Campaign> {
    constructor(
        @InjectRepository(Campaign) repository,
        @InjectRepository(Campaign)
        private readonly campaignRepository: Repository<Campaign>,
    ) {
        super(repository);
    }

    async findAll(): Promise<Campaign[]> {
        return await this.campaignRepository.find();
    }
}
