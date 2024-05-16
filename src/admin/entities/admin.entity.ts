import { Exclude } from 'class-transformer';
import { BaseEntity } from 'src/shared/entity/base.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class Admin extends BaseEntity {
  @Column({ type: 'varchar', length: 20 })
  username: string;

  @Column({ type: 'varchar', length: 40 })
  email: string;

  @Exclude()
  @Column({ type: 'varchar', length: 70, select: false })
  password: string;
}
