import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); //Enable CORS for frontend
  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log(`Application is runnging on port ${port}`);
}
void bootstrap();
