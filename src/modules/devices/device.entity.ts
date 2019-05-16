import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Device {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}
