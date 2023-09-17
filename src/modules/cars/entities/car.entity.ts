import { BaseEntity } from 'src/base/base.entity';
import { Image } from 'src/modules/image/entities/image.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { ForRentOrSail } from '../enum/enum';

@Entity()
export class Car extends BaseEntity {
  @Column()
  name: string;

  @Column()
  model: string;

  @Column()
  year: string;

  @Column()
  license_plate: string;

  @Column()
  color: string;

  @Column({ default: 0 })
  celling_price: number;

  @Column({ default: 0 })
  rent_price: number;

  @Column({ nullable: true })
  vin: string;

  @Column({ type: 'boolean', default: false })
  isRented: boolean;

  @CreateDateColumn()
  startRent: Date;

  @CreateDateColumn()
  endRent: Date;

  @Column({ nullable: true })
  totalRentedPrice: number;

  // @Column({
  //     type:'enum',
  //     enum: ForRentOrSail,
  //     default: ForRentOrSail.RENT

  // })
  // status: ForRentOrSail
}
