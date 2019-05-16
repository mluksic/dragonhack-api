import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { Device } from './device.entity';
import { DeviceService } from './device.service';

@Crud(Device)
@Controller('devices')
export class DeviceController {
    constructor(public service: DeviceService) {}
}
