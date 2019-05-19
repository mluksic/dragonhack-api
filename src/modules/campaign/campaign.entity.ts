import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn } from 'typeorm';
import { Ad } from '../ad/ad.entity';
import { ValidateNested } from 'class-validator';

@Entity()
export class Campaign {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(type => Ad, p => p.campaign, {
        nullable: false,
        eager: true,
    })
    @JoinColumn()
    ads: Ad[];
}
