import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Campaign } from '../campaign/campaign.entity';
import { Report } from '../reports/report.entity';
import { ValidateNested } from 'class-validator';

@Entity()
export class Ad {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    tag: string;

    @Column()
    image: string;

    @Column()
    gender: string;

    @Column()
    location: string;

    @ManyToOne(type => Campaign, c => c.ads)
    campaign: Campaign;

    @OneToMany(type => Report, p => p.ad)
    reports: Report[];
}
