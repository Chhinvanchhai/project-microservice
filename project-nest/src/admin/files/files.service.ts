import { Injectable, Res } from '@nestjs/common';
import { CreateFileDto } from './dto/create-file.dto';
import { UpdateFileDto } from './dto/update-file.dto';
import { readFile } from 'fs';

@Injectable()
export class FilesService {
    create(createFileDto: CreateFileDto) {
        return 'This action adds a new file';
    }

    findAll() {
        return `This action returns all files`;
    }

    views(name: string, res) {
        const filename = `./uploads/images/${name}`;
        readFile(filename, (err, data) => {
            if (err) {
                res.status(404).send('File not found');
            } else {
                console.log(name);
                const types = name.split('.');
                const extension = types[types.length - 1];
                if (extension == 'pdf') {
                    res.setHeader('Content-Type', 'application/pdf');
                    console.log(extension);
                    return res.send(data);
                } else {
                    const type = `image/${extension}`;
                    res.contentType(type);
                    return res.send(data);
                }
            }
        });
    }

    update(id: number, updateFileDto: UpdateFileDto) {
        return `This action updates a #${id} file`;
    }

    remove(id: number) {
        return `This action removes a #${id} file`;
    }
}
