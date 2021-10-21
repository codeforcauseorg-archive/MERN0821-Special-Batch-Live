import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateImageDto } from './dto/create-image.dto';
import { Image, ImageDocument } from './entities/image.entity';

@Injectable()
export class ImagesService {
  constructor(
    @InjectModel(Image.name) private imageModel: Model<ImageDocument>,
  ) {}

  async create(createImageDto: CreateImageDto) {
    const createCollection = new this.imageModel(createImageDto);
    let response = await createCollection.save();
    return response;
  }

  async findAll() {
    let response = await this.imageModel.find();
    return response;
  }fi

  async findOne(id: string) {
    let response = await this.imageModel.findById(id);
    return response;
  }

  async remove(id: string) {
    let response = await this.imageModel.findByIdAndDelete(id);
    return response
  }
}
