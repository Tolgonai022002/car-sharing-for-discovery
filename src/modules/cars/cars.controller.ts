import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UploadedFile,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { type } from 'os';
import { ForRentOrSail } from './enum/enum';
import { Multer } from 'multer';
import { ListParamsDto } from 'src/base/dto/list-params.dto';

@ApiTags('Автомобиль')
@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Post('create')
  @UseInterceptors(FileInterceptor('image'))
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
          example: 'Брауни',
          description: 'Название блюда',
        },
        model: {
          type: 'string',
          example: 'Модель данного автомобиля',
          description: 'Тут пиши описание а выше пусть будет название',
        },
        year: {
          type: 'string',
          example: '22.09.23',
          description: 'Дата добавления автомобиля в учет',
        },
        license_plate: {
          type: 'string',
          example: 'GHJKJVNWJB',
          description: ' Лицензия данного автомобиля',
        },
        color: {
          type: 'string',
          example: 'blue',
          description: 'Цвет данного автомомбиля',
        },
        celling_price: {
          type: 'number',
          example: 900,
          description: 'Цена за которую должен быть продан автомобиль',
        },
        rent_price: {
          type: 'number',
          example: 699,
          description:
            'Цена за которую пользователь может арендовать автомобиль',
        },
        vin: {
          type: 'string',
          example: 'HJKRHI5555',
          description: 'VIN автомобиля',
        },
      },
    },
  })
  async createObe(@Body() dto: CreateCarDto) {
    return await this.carsService.crecateCar(dto);
  }

  @Get('list')
  async getList(@Query() listParamsDto: ListParamsDto) {
    return await this.carsService.list(listParamsDto);
  }
}
