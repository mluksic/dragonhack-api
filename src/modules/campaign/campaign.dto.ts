import { ValidateNested, IsString } from 'class-validator';
import { AdDTO } from '../ad/ad.dto';
import { Type } from 'class-transformer';

export class CampaignDTO {
    @IsString()
    readonly name: string;

    @ValidateNested({ each: true })
    @Type(() => AdDTO)
    readonly ads: AdDTO[];
}
