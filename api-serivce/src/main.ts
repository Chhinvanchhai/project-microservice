// /* eslint-disable prettier/prettier */

// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';
// import { MicroserviceOptions, Transport} from '@nestjs/microservices'

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   app.connectMicroservice({
//     transport: Transport.KAFKA,
//     options: {
//       port: 3001
//     }
//   })
//   await app.startAllMicroservices();
//   await app.listen(3001);
// }
// bootstrap();

/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();