export const SQL_DB_PROVIDER = 'SEQUELIZE';
export const QUIZ_REPOSITORY = 'QUIZ_REPOSITORY';
export const PHOTO_REPOSITORY = 'PHOTO_REPOSITORY';
export const TYPEORM_DB_PROVIDER = 'TYPEORM_DB_PROVIDER';
export const QUESTION_REPOSITORY = 'QUESTION_REPOSITORY';
export const OPTION_REPOSITORY = 'OPTION_REPOSITORY';
export const USER_REPOSITORY = 'USER_REPOSITORY';
export const REGEX = {
  password: {
    rule: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/,
    message:
      'Password should be 8 char long and must contain 1 Uppercase, lowercase, number character',
  },
};
