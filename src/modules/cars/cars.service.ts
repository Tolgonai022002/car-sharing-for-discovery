import { Injectable } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { BaseService } from 'src/base/base.service';
import { Car } from './entities/car.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ImageService } from '../image/image.service';

@Injectable()
export class CarsService extends BaseService<Car> {
  constructor(
    @InjectRepository(Car)
    private readonly carRepo: Repository<Car>,
    private readonly imageService: ImageService,
  ) {
    super(carRepo);
  }

  async crecateCar(dto: CreateCarDto) {
    return await this.carRepo.save(dto);
  }
}
