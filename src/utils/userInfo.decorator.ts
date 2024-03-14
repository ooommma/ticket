import { createParamDecorator, ExecutionContext } from '@nestjs/common';

// createParamDecorator는 NestJS에서 커스텀 데코레이터를 만드는 데 사용
// ExecutionContext은 실행 컨텍스트에 대한 정보를 제공하는데 사용

export const UserInfo = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest(); //  HTTP 요청 객체를 가져옴
    return request.user ? request.user : null;
  },
);

// createParamDecorator 함수를 사용
// 첫 번째 매개 변수 data: unknown -> 요청에 대한 데이터
// 두번째 매개 변수의 실행 컨텍스트 ctx -> NestJS 애플리케이션에서 현재 요청에 대한 정보를 제공
// switchToHttp()는 HTTP 요청을 사용하기 위한 메서드
// request.user를 통해 요청에서 사용자 정보를 확인. 대부분의 경우,
// 이 코드는 Passport 또는 다른 인증 미들웨어를 통해 요청 객체에 사용자 정보가 추가된 경우에 사용
// 만약 요청 객체에 사용자 정보가 있다면 해당 정보를 반환하고, 그렇지 않으면 null을 반환

// ctx: ExecutionContext => ExecutionContext를 사용하여 현재 요청에 대한 정보를 가져올 수 있다.
// 이 정보를 사용하여 HTTP 요청 객체인 request를 얻어오고, 거기서 사용자 정보를 추출하는 등의 작업을 수행할 수 있다.
