import { Controller, Get } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { Campaign } from './campaign.entity';
import { CampaignService } from './campaign.service';
import { CampaignDTO } from './campaign.dto';

// @Crud(Campaign, {
//     options: {
//         exclude: ['password'],
//         join: {
//             ads: {
//                 allow: ['tag'],
//             },
//         },
//         maxLimit: 10,
//         cache: 3000,
//     },
// })
@Controller('campaigns')
export class CampaignController {
    constructor(public service: CampaignService) {}

    @Get()
    findAll(): Promise<CampaignDTO[]> {
        return this.service.findAll();
    }
}
