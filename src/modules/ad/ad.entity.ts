import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Ad {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    tag: string;

    @Column()
    gender: string;

    @Column()
    image: string;
}
