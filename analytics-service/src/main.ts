/* eslint-disable prettier/prettier */
import { NestFactory} from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice({
    transport: Transport.REDIS,
    options: {
      port: 6379,
    },
  });
  await app.startAllMicroservices();
  // await app.listen(3001);
  // console.log(`listening on 3001`);
}
bootstrap();

// async function bootstrap() {
//   const app = await NestFactory.createMicroservice<MicroserviceOptions>(
//       AppModule,
//       {
//         transport: Transport.TCP,
//             options: {
//         port: 3001,
//       },
//     },
//   );
//   await app.listen();
// }
// bootstrap();