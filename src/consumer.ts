import { NestFactory } from '@nestjs/core';
import { ConsumerModule } from './consumer/consumer.module'

async function bootstrap() {
  const app = await NestFactory.create(ConsumerModule);
  await app.startAllMicroservices();
  await app.listen(4000);
}
bootstrap();
