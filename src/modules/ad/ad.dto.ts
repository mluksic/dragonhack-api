import { IsString, ValidateNested } from 'class-validator';
import { CampaignDTO } from '../campaign/campaign.dto';
import { Type } from 'class-transformer';

export class AdDTO {
    @IsString()
    readonly name: string;

    @IsString()
    readonly tag: string;

    @IsString()
    readonly image: string;

    @IsString()
    readonly location: string;

    @IsString()
    readonly gender: string;

    @ValidateNested()
    @Type(() => CampaignDTO)
    readonly campaign: CampaignDTO;
}
