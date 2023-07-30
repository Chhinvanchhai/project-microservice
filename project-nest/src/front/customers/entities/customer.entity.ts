/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn , UpdateDateColumn, DeleteDateColumn } from 'typeorm';

@Entity({name:'customers'})
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable: true})
  first_name: string;

  @Column({default: new Date().getTime(), nullable: true})
  member_ID: string;

  @Column({default: new Date().getTime()})
  idd: string;

  @Column({default: new Date().getTime()})
  password: string;

  @Column({default: new Date().getTime()})
  agent_referral_code: string;

  @Column({nullable: true})
  phone_number: string;

  @CreateDateColumn({default: new Date(), nullable: true})
  created_at!: Date;

  @UpdateDateColumn({default: new Date(), nullable: true})
  updated_at!: Date;

  // Add this column to your entity!
  @DeleteDateColumn({default: new Date(), nullable: true})
  deleted_at?: Date;
}