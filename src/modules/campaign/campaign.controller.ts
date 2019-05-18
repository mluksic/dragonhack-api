import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { Campaign } from './campaign.entity';
import { CampaignService } from './campaign.service';

@Crud(Campaign)
@Controller('campaigns')
export class CampaignController {
    constructor(public service: CampaignService) {}
}
