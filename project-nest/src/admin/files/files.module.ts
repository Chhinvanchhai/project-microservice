import { Module } from '@nestjs/common';
import { FilesService } from './files.service';
import { FilesController } from './files.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductMedia } from './entities/product.media.entity';

@Module({
    controllers: [FilesController],
    providers: [FilesService],
    imports: [TypeOrmModule.forFeature([ProductMedia])],
    exports: [FilesService],
})
export class FilesModule {}
