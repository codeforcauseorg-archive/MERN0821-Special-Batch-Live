import { Controller, Get, Post, Body, Patch, Param, Delete, Res, UseGuards } from '@nestjs/common';
import { ImagesService } from './images.service';
import { CreateImageDto } from './dto/create-image.dto';
import { Response } from 'express';
import { AuthGuard } from '@nestjs/passport';

@Controller('images')
@UseGuards(AuthGuard('firebase'))
export class ImagesController {
  constructor(private readonly imagesService: ImagesService) {}

  @Post()
  create(@Body() createImageDto: CreateImageDto) {
    return this.imagesService.create(createImageDto);
  }

  @Get("/hello")
  sayhello() {
    return "This is hello from image";
  }

  @Get()
  findAll() {
    return this.imagesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() response: Response) {
    let responseBody = await this.imagesService.findOne(id);
    let buffer = Buffer.from(responseBody.content, 'base64');
    response.setHeader('Content-Type', 'image/png');
    response.send(buffer);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.imagesService.remove(id);
  }
}
