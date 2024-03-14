import { IsDateString, IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class registerDto {
  @IsEmail()
  @IsNotEmpty({ message: '이메일은 필수입니다.' })
  email: string;

  @IsString()
  @IsNotEmpty({ message: '비밀번호를 입력해주세요.' })
  password: string;

  @IsString()
  @IsNotEmpty({ message: '이름을 입력해주세요.' })
  name: string;

  @IsDateString()
  @IsNotEmpty({ message: '생년월일 8자리를 입력해주세요.' })
  birth: number;

  @IsString()
  @IsNotEmpty({ message: '전화번호를 입력해주세요' })
  phone: string;

  @IsString()
  @IsNotEmpty({ message: '주소를 입력해주세요' })
  address: string;
}
