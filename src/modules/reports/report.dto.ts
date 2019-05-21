import { ValidateNested, IsString, IsNumber } from 'class-validator';
import { AdDTO } from '../ad/ad.dto';
import { Type } from 'class-transformer';

export class ReportDTO {
    @IsString()
    readonly name: string;

    @IsString()
    readonly gender: string;

    @IsNumber()
    readonly numberOfPeople: number;

    @IsString()
    readonly adTag: string;

    @IsString()
    readonly emotional: string;

    @ValidateNested()
    @Type(() => AdDTO)
    readonly ad: AdDTO;
}
