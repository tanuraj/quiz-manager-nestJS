import Option from '../entities/options.entity';
import { OPTION_REPOSITORY } from 'src/utils/constant';

//For SequalizeORM
export const optionProviders = [
  {
    provide: OPTION_REPOSITORY,
    useValue: Option,
  },
];
