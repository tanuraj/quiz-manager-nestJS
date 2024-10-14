import { Module } from '@nestjs/common';
import { typeOrmDbProviders } from './typeOrmDb.provider';

@Module({
  providers: [...typeOrmDbProviders],
  exports: [...typeOrmDbProviders],
})
export class TypeOrmDbModule {}
