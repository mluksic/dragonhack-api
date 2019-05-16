import { Device } from './device.entity';
import { RepositoryService } from '@nestjsx/crud/typeorm';
export declare class DevicesService extends RepositoryService<Device> {
    constructor(repository: any);
}
