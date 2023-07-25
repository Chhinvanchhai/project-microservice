/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Query,Param, Delete, UseInterceptors, UploadedFile, ParseFilePipe } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { FileInterceptor, MulterModule } from '@nestjs/platform-express';
import { MaxFileSizeValidator, FileTypeValidator } from '@nestjs/common';
import { diskStorage } from 'multer';

@Controller('admin/products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    console.log('product=', createProductDto);
    return this.productsService.create(createProductDto);
  }

  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  @Get('id/:id')
  findOne(@Param('id') id) {
    return this.productsService.findOne(id);
  }

  @Get('pagination')
  pagination(@Query() query) {
    return this.productsService.pagination(query);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file' ,{
    storage: diskStorage({
      destination:'./uploads/images',
      filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        const extArray = file.mimetype.split("/");
        const extension = extArray[extArray.length - 1];
        cb(null, file.fieldname + '-' + uniqueSuffix+'.'+extension)
      }
    })
  }
  ))
  uploadFile(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 100 * 1024 * 1024}),
          new FileTypeValidator({ fileType: '[image/jpeg,image/png]' }),
        ],
      }),
    )
    file: Express.Multer.File) {
      return {
        status: "success",
        msg: "Uploaded file successfully",
        path: file.path
      }

    }
}
