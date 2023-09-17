import { ApiProperty } from '@nestjs/swagger';
import { BaseDto } from 'src/base/dto/base.dto.';
import { Image } from 'src/modules/image/entities/image.entity';
import {
  IsString,
  IsOptional,
} from 'class-validator';

export class CreateCarDto extends BaseDto {
  @ApiProperty()
  @IsString()
  @IsOptional()
  name: string;

  @ApiProperty({
    nullable: true,
  })
  @IsString()
  model: string;

  @ApiProperty({ nullable: true })
  @IsString()
  year: string;

  @ApiProperty({ nullable: true })
  @IsString()
  license_plate: string;

  @ApiProperty({ nullable: true })
  @IsString()
  color: string;

  @ApiProperty({ nullable: true })
  // @IsNumber()
  @IsOptional()
  celling_price: number;

  @ApiProperty({ nullable: true })
  // @IsNumber()
  @IsOptional()
  rent_price: number;

  @ApiProperty({ nullable: true, example: 'GHJKFN87DVC' })
  @IsString()
  vin: string;

  @ApiProperty()
  @IsOptional()
  image: Image;

  // @ApiProperty({
  //     enum:ForRentOrSail
  // })
  // status: ForRentOrSail
}
