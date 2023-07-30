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

@Controller('files')
export class FilesController {
    constructor(private readonly filesService: FilesService) {}

    @Post()
    create(@Body() createFileDto: CreateFileDto) {
        return this.filesService.create(createFileDto);
    }

    @Get(':id')
    views(@Param('id') id, @Res() res: Response) {
        return this.filesService.views(id, res);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateFileDto: UpdateFileDto) {
        return this.filesService.update(+id, updateFileDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.filesService.remove(+id);
    }
}
