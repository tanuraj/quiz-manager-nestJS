import { Module } from '@nestjs/common';
import { TypeOrmDbModule } from '../typeORMDb/typeOrmDb.module';
import { photoProviders } from './photo.providers';
import { PhotoService } from './photo.service';
import { PhotoController } from './photo.controller';

@Module({
  imports: [TypeOrmDbModule],
  controllers: [PhotoController],
  providers: [...photoProviders, PhotoService],
})
export class PhotoModule {}
