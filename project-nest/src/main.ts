import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { AppDataSource } from './database/data-source';
import { Transport } from '@nestjs/microservices';

// async function bootstrap() {
//     const app = await NestFactory.create(AppModule);
//     app.enableCors();
//     app.useGlobalPipes(new ValidationPipe());
//     // await AppDataSource;
//     app.connectMicroservice({
//         transport: Transport.REDIS,
//         options: {
//             host: '127.0.0.1',
//             port: 6379,
//         },
//     });
//     await app.startAllMicroservices();
// }
// bootstrap();
async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.setGlobalPrefix('api/v1');
    app.enableCors();
    app.useGlobalPipes(new ValidationPipe());
    await app.listen(8000);
    // await AppDataSource;
}
bootstrap();
