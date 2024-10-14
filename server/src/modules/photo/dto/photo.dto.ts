import { IsNotEmpty, IsNumber, Length, IsIn } from 'class-validator';

export class PhotoDto {
  constructor(params) {}

  @IsNotEmpty({ message: 'Name is required' })
  @Length(0, 50, { message: 'Name should be less than 50 characters' })
  name: string;

  @IsNotEmpty({ message: 'Description is required' })
  @Length(0, 500, { message: 'Description should be less than 500 characters' })
  description: string;

  @IsNumber()
  views: number;

  @IsIn(['myFile', ' yourFile', 'hisFile'])
  filename: string;
}
