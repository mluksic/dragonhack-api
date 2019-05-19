import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, ManyToOne } from 'typeorm';
import { CrudValidate } from '@nestjsx/crud';
import { IsOptional, IsNotEmpty } from 'class-validator';
import { Ad } from '../ad/ad.entity';
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
        eager: true,
        nullable: false,
    })
    ad: Ad;
}
