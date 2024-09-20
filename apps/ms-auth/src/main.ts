import { NestFactory } from '@nestjs/core';
import { MsAuthModule } from './ms-auth.module';

async function bootstrap() {
  const app = await NestFactory.create(MsAuthModule);
  await app.listen(3001);
  console.log("<--------------------------Application Running MsAuth----------------------------------->")
}
bootstrap();
