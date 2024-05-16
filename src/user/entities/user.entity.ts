import { Exclude } from 'class-transformer';
import { BaseEntity } from 'src/shared/entity/base.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @Column({ type: 'varchar', length: 30 })
  name: string;

  @Column({ type: 'varchar', length: 15 })
  username: string;

  @Column({ type: 'enum', enum: ['m', 'f', 'u'] })
  /**
   * m - male
   * f - female
   * u - unspecified
   */
  gender: string;

  @Column({ nullable: true })
  birthday: Date;

  @Column({ type: 'varchar' })
  phone_number: string;

  @Column({ type: 'varchar', length: 40, unique: true })
  email: string;

  @Exclude()
  @Column({ type: 'varchar' })
  password: string;
}
