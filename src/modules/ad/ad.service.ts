import { Injectable } from '@nestjs/common';
import { RepositoryService } from '@nestjsx/crud/typeorm';
import { Ad } from './ad.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AdService extends RepositoryService<Ad> {
    constructor(@InjectRepository(Ad) repository) {
        super(repository);
    }
}
