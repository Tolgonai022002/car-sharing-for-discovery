import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToOne,
  OneToOne,
} from 'typeorm';
import { BaseEntity } from '../../../base/base.entity';
import { IsString } from 'class-validator';
import { Car } from 'src/modules/cars/entities/car.entity';

@Entity()
export class Image extends BaseEntity {
  @Column()
  @IsString()
  url: string;

  @IsString()
  publicId: string;

  // @OneToOne(()=>Car,(car)=>car.image)
  // @JoinTable()
  // car: Car
}
