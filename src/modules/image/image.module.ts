import { Module } from '@nestjs/common';
import { ImageService } from './image.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Image } from './entities/image.entity';
import { CloudinaryModule } from '../../services/cloudinary/cloudinary.modules';
import { ImageController } from './image.controller';
import { Car } from '../cars/entities/car.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Image, Car]), CloudinaryModule],
  providers: [ImageService],
  controllers: [ImageController],
  exports: [ImageService],
})
export class ImageModule {}
