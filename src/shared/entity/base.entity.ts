import { Exclude } from 'class-transformer';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

export abstract class BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Exclude()
  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  created_at: Date;

  @Exclude()
  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  updated_at: Date;

  @Exclude()
  @Column({ type: 'timestamp with time zone', nullable: true })
  deleted_at: Date;

  @Exclude()
  @Column({ nullable: true })
  created_device_ip: string;

  @Exclude()
  @Column({ nullable: true })
  updated_device_ip: string;

  @Exclude()
  @Column({ nullable: true, select: false })
  deleted_device_ip: string;
}
