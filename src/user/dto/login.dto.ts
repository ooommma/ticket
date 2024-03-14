import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class loginDto {
  @IsEmail()
  @IsNotEmpty({ message: '이메일은 필수입니다.' })
  email: string;

  @IsString()
  @IsNotEmpty({ message: '비밀번호를 입력해주세요.' })
  password: string;
}
