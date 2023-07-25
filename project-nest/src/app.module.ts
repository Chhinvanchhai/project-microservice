/* eslint-disable prettier/prettier */
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './admin/admin.module';
import MysqlConnection from './database/index'
// import { JwtModule } from '@nestjs/jwt'
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './admin/user/user.module';
import { FrontModule } from './front/front.module';
import { MulterModule } from '@nestjs/platform-express';
@Module({
  imports: [ 
    ConfigModule.forRoot(
      {
   
        isGlobal: true,
      }
    ),
    MysqlConnection(), 
    MulterModule.register({
      dest: './uploads',
    }),
    AdminModule, 
    UserModule, FrontModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
