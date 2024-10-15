import { Sequelize } from 'sequelize-typescript';
import { Quiz } from '../quiz/quiz.entity';
import { SQL_DB_PROVIDER } from 'src/utils/constant';
import Question from '../quiz/question.entity';

const dbProviders = {
  provide: SQL_DB_PROVIDER,
  useFactory: async () => {
    const sequelize = new Sequelize({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Admin@123',
      database: 'quiz',
    });
    sequelize.addModels([Quiz, Question]);
    await sequelize.sync({ alter: true });
    return sequelize;
  },
};

export default dbProviders;
