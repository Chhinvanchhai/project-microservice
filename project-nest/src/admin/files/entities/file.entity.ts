import { Column, Entity } from 'typeorm';

@Entity('')
export class File {
    @Column({ nullable: true })
    name: string;
}
