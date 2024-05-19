import {
  IsEmail,
    IsIn,
    IsNotEmpty,
    IsPhoneNumber,
    MaxLength,
    MinLength,
  } from 'class-validator';
  
  export class CreateUserDto {
    @MinLength(8)
    @MaxLength(20)
    @IsNotEmpty()
    username: string;
  
    @MinLength(8)
    @IsNotEmpty()
    password: string;
  
    @IsNotEmpty()
    @MinLength(2)
    name: string;

    // @IsEmail()
    // email: string;

    // @IsPhoneNumber('KR')
    // phone: string;

    // @IsIn(['female','male'])
    // gender: string;
  }