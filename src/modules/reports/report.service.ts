import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RepositoryService } from '@nestjsx/crud/typeorm';
import { Report } from './report.entity';

@Injectable()
export class ReportService extends RepositoryService<Report> {
    constructor(@InjectRepository(Report) repository) {
        super(repository);
    }
}
