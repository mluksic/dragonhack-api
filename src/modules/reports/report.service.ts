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
        let ads = await this.adRepository.find({ tag: report.adTag });
        let ad = null;
        if (ads.length) {
            const genderAd = ads.filter(ad => ad.gender === report.gender);
            if (genderAd.length) {
                ad = genderAd[Math.floor(Math.random() * genderAd.length)];
                report.ad = ad;
                this.reportRepository.insert(report);
            } else {
                ad = ads[Math.floor(Math.random() * ads.length)];
                report.ad = ad;
                this.reportRepository.insert(report);
            }
        } else {
            ads = await this.adRepository.find({ tag: 'default' });
            ad = ads[Math.floor(Math.random() * ads.length)];
            report.ad = ad;
            this.reportRepository.insert(report);
        }
        return ad !== null ? ad.image : '';
    }

    async findAll(): Promise<Report[]> {
        return await this.reportRepository.find();
    }
}
