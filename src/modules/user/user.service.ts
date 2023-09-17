import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { BaseService } from 'src/base/base.service';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService extends BaseService<User>{
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>
  ){
    super(userRepo)
  }

  async create (dto: CreateUserDto){
    return await this.userRepo.save(dto)
  }
}
