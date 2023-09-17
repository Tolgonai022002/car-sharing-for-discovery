import { Module } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CarsController } from './cars.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Car } from './entities/car.entity';
import { CloudinaryModule } from 'src/services/cloudinary/cloudinary.modules';
import { Image } from '../image/entities/image.entity';
import { ImageService } from '../image/image.service';

@Module({
  imports: [TypeOrmModule.forFeature([Image, Car]), CloudinaryModule],
  controllers: [CarsController],
  providers: [CarsService, ImageService],
})
export class CarsModule {}
