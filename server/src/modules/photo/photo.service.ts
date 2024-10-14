import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Photos } from './photo.entity';
import { PHOTO_REPOSITORY } from 'src/utils/constant';

@Injectable()
export class PhotoService {
  constructor(
    @Inject(PHOTO_REPOSITORY)
    private photoRepository: Repository<Photos>,
  ) {}

  async findAll(): Promise<Photos[]> {
    return this.photoRepository.find();
  }

  async createPhoto(reqData) {
    return await this.photoRepository.save({ ...reqData });
  }
}
