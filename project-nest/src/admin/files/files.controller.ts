import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    Res,
} from '@nestjs/common';
import { FilesService } from './files.service';
import { CreateFileDto } from './dto/create-file.dto';
import { UpdateFileDto } from './dto/update-file.dto';
import { Response } from 'express';

@Controller()
export class FilesController {
    constructor(private readonly filesService: FilesService) {}

    @Post('files')
    create(@Body() createFileDto: CreateFileDto) {
        return this.filesService.create(createFileDto);
    }

    @Get('files/:id')
    views(@Param('id') id, @Res() res: Response) {
        return this.filesService.views(id, res);
    }

    @Get('media/{path}')
    viewMedia(@Param('path') path, @Res() res: Response) {
        return this.filesService.viewsMedia(path, res);
    }

    @Patch('files/:id')
    update(@Param('id') id: string, @Body() updateFileDto: UpdateFileDto) {
        return this.filesService.update(+id, updateFileDto);
    }

    @Delete('files/:id')
    remove(@Param('id') id: string) {
        return this.filesService.remove(+id);
    }
}
