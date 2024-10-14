import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { PhotoService } from './photo.service';
import { Photos } from './photo.entity';
import { PhotoDto } from './dto/photo.dto';

@Controller('photos')
export class PhotoController {
  constructor(private readonly photoService: PhotoService) {}

  @Get()
  async getAllPhotos(): Promise<Photos[]> {
    return await this.photoService.findAll();
  }

  @Post('/add')
  @UsePipes(ValidationPipe)
  async addNewPhoto(@Body() reqData: PhotoDto) {
    return await this.photoService.createPhoto(reqData);
  }
}
