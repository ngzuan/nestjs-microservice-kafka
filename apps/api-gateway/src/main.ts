import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const POST = 3005
  const app = await NestFactory.create(AppModule);
  await app.listen(POST);
  console.log("<============================================ApiGateway start to port " + POST + "============================================>")
}
bootstrap();
