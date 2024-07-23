import { Sequelize } from 'sequelize-typescript';
import { Quiz } from '../quiz/quiz.entity';

const dbProviders = {
  provide: 'SEQUELIZE',
  useFactory: async () => {
    const sequelize = new Sequelize({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Admin@123',
      database: 'quiz',
    });
    sequelize.addModels([Quiz]);
    await sequelize.sync({ alter: true });
    return sequelize;
  },
};

export default dbProviders;
