import { Sequelize } from 'sequelize-typescript';
import { Quiz } from '../quiz/entities/quiz.entity';
import { SQL_DB_PROVIDER } from 'src/utils/constant';
import Question from '../quiz/entities/question.entity';
import Option from '../quiz/entities/options.entity';
import { ConfigService } from '@nestjs/config';
import User from '../user/user.entity';

const dbProviders = {
  provide: SQL_DB_PROVIDER,
  useFactory: async (configService: ConfigService) => {
    const sequelize = new Sequelize({
      dialect: 'mysql',
      host: configService.get('SQL_DB_HOST'),
      port: configService.get('SQL_DB_PORT'),
      username: configService.get('SQL_DB_USERNAME'),
      password: configService.get('SQL_DB_PASSWORD'),
      database: configService.get('SQL_DB_NAME'),
    });
    sequelize.addModels([Question, Quiz, Option, User]);
    await sequelize.sync({ alter: true });
    return sequelize;
  },

  inject: [ConfigService],
};

export default dbProviders;
