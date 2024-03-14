import { UserInfo } from 'src/utils/userInfo.decorator';
import { Controller, Get, Post, Patch, Body } from '@nestjs/common';
import { CreateUserDto } from 'src/user/dto/createUser.dto';
import { UpdateUserDto } from 'src/user/dto/updateUser.dto';
import { registerDto } from './dto/register.dto';
import { UserService } from './user.service';
import { loginDto } from './dto/login.dto';

@Controller('users')
export class UserController {
  // UserController 클래스를 정의.
  constructor(private readonly userService: UserService) {} // UserController의 생성자
  // 의존성 주입을 사용, UserService를 컨트롤러에 주입 => UserController 내에서 userService를 사용할 수 있음

  @Post('register')
  async register(@Body() registerDto: registerDto) {
    const userInfo = await this.userService.register(registerDto);
    return { message: '웰컴! 회원가입 완료', userInfo };
  }

  // @Body() : HTTP 요청의 본문(body)에서 데이터 추출

  @Post('login')
  async login(@Body() loginDto: loginDto) {
    const user = await this.userService.signin(
      loginDto.email,
      loginDto.password,
    );
  }
}
