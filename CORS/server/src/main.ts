import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    // 1. cors 옵션이 없다면 클라이언트에서는 에러가 나지만 실제로는 요청이 처리됨을 확인 할 수 있음
    // 2. 클라이언트 url만 허용
    // cors: { origin: 'http://localhost:3000' },
    // 3. Access-Control-Allow-Origin: '*', Access-Control-Allow-Credentials: true 로 설정
    // 따라서 클라이언트에서 credential: include 옵션과 함께 전달할 경우 CORS 에러가 발생한다
    // cors: { origin: '*', credentials: true },
  });
  await app.listen(4000);
}

bootstrap();
