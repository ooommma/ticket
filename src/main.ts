import { ValidationPipe } from '@nestjs/common'; // Nest.js의 유효성 검사 관련 기능을 제공하는 클래스
import { NestFactory } from '@nestjs/core'; //  Nest.js 애플리케이션의 인스턴스를 생성하는 데 사용
import { AppModule } from './app.module'; // Nest.js 애플리케이션의 진입점인 루트 모듈

// bootstrap() 함수: 애플리케이션의 진입점, 이 함수는 Nest.js 애플리케이션을 생성하고 구동시키는 역할
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    // 애플리케이션의 모든 요청에 대해 전역적으로 사용할 파이프를 설정
    new ValidationPipe({
      // 요청의 데이터를 자동으로 유효성 검사하고 필터링하는데 사용
      whitelist: true, // 입력 데이터에서 유효하지 않은 속성을 자동으로 제거하여 보안을 강화
      transform: true, // 입력 데이터를 해당 타입으로 자동 변환
      forbidNonWhitelisted: true, // 유효하지 않은 속성이 입력 데이터에 포함되어 있으면 요청을 거부
    }),
  );

  await app.listen(3000);
}

bootstrap();

// main.ts -> nest.js 프레임워크를 사용하여 서버를 생성/ 구동하는 파일
