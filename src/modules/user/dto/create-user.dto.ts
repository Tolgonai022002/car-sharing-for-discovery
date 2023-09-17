import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsOptional, IsString } from "class-validator";
import { BaseDto } from "src/base/dto/base.dto.";

export class CreateUserDto extends BaseDto{
    @ApiProperty({nullable:true})
    @IsString()
    firstName:string

    @ApiProperty({nullable:true})
    @IsString()
    lastName:string
}
