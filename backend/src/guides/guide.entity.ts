import { Entity, Column, PrimaryColumn  } from 'typeorm';

@Entity('guides')
export class Guide {
    
    @PrimaryColumn('uuid')
    id: string;

    @Column()
    name: string;
}