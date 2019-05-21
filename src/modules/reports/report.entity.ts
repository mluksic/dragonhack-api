import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { CrudValidate } from '@nestjsx/crud';
import { IsOptional, IsNotEmpty } from 'class-validator';
import { Ad } from '../ad/ad.entity';
import { BaseEntity } from 'src/base-entity';
const { CREATE, UPDATE } = CrudValidate;

@Entity()
export class Report extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    gender: string;

    @Column()
    numberOfPeople: number;

    @Column()
    emotional: string;

    @ManyToOne(type => Ad, c => c.reports, {
        nullable: false,
        eager: true,
    })
    @JoinColumn()
    ad: Ad;

    @Column()
    adTag: string;
}
