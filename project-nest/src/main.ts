/* eslint-disable prettier/prettier */
// import { Transport } from '@nestjs/microservices';
// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   app.connectMicroservice({
//     transport: Transport.TCP,
//     options: {
//       port: 3002
//     }
//   });
//   await app.startAllMicroservices();
//   await app.listen(3002);
// }
// bootstrap();
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(8000);
}
bootstrap();


