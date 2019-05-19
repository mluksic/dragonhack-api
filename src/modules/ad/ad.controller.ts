import { Controller } from '@nestjs/common';
import { Ad } from './ad.entity';
import { Crud } from '@nestjsx/crud';
import { AdService } from './ad.service';

// @Crud(Ad)
@Controller('ads')
export class AdController {
    constructor(public service: AdService) {}
}
