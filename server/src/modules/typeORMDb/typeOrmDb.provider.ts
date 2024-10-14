import { TYPEORM_DB_PROVIDER } from 'src/utils/constant';
import { DataSource } from 'typeorm';

export const typeOrmDbProviders = [
  {
    provide: TYPEORM_DB_PROVIDER,
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'Admin@123',
        database: 'quiz',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
