import { Injectable } from '@nestjs/common';
import { Device } from './device.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { RepositoryService } from '@nestjsx/crud/typeorm';

@Injectable()
export class DeviceService extends RepositoryService<Device> {
    constructor(@InjectRepository(Device) repository) {
        super(repository);
    }
}
