import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { Report } from './report.entity';
import { ReportService } from './report.service';

@Crud(Report)
@Controller('reports')
export class ReportController {
    constructor(public service: ReportService) {}
}
