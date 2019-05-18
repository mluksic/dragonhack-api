import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

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
}
