import { Controller, Get, Post, Body } from '@nestjs/common';
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

    @Post()
    createFolder(@Body() campaign: CampaignDTO): Promise<CampaignDTO> {
        return this.service.createCampaign(campaign);
    }
}
