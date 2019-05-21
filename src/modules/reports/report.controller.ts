import { Controller, Post, Body } from '@nestjs/common';
import { Crud, Override, UsePathInterceptors, ParsedParams, ParsedBody } from '@nestjsx/crud';
import { Report } from './report.entity';
import { ReportService } from './report.service';
import { ReportDTO } from './report.dto';

@Crud(Report)
@Controller('reports')
export class ReportController {
    constructor(public service: ReportService) {}

    @Override()
    createOne(@ParsedParams() params, @ParsedBody() body: Report) {
        return this.service.createAndGetAd(body);
    }

    @Override()
    getMany() {
        return this.service.findAll();
    }
}
