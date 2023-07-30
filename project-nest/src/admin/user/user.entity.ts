/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true, default: true })
  created_at: Date = new Date();

  @Column({ nullable: true })
  updated_at: string;

  @Column({ nullable: true })
  role: number;


}