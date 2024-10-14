import { DataSource } from 'typeorm';
import { Photos } from './photo.entity';
import { PHOTO_REPOSITORY, TYPEORM_DB_PROVIDER } from 'src/utils/constant';

export const photoProviders = [
  {
    provide: PHOTO_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Photos),
    inject: [TYPEORM_DB_PROVIDER],
  },
];
