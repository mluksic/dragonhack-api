import { Ad } from './../ad/ad.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RepositoryService } from '@nestjsx/crud/typeorm';
import { Report } from './report.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ReportService extends RepositoryService<Report> {
    constructor(
        @InjectRepository(Report) repository,
        @InjectRepository(Ad) private readonly adRepository: Repository<Ad>,
        @InjectRepository(Report) private readonly reportRepository: Repository<Report>,
    ) {
        super(repository);
    }

    async createAndGetAd(report: Report): Promise<Ad> {
        const ads = await this.adRepository.find({ tag: report.adTag });
        let ad = null;
        if (ads.length) {
            ad = ads[Math.floor(Math.random() * ads.length)];
            report.ad = ad;
            this.reportRepository.insert(report);
        }
        return ad !== null ? ad.image : '';
    }
}
