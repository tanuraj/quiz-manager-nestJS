import { Module } from '@nestjs/common';
import sqlOrmDbProviders from './sqlOrmDb.providers';

@Module({
  providers: [sqlOrmDbProviders],
  exports: [sqlOrmDbProviders],
})
export class SqlOrmDbModule {}
