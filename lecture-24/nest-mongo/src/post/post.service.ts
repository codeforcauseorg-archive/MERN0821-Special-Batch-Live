import { Injectable } from '@nestjs/common';
import { InstaPost, PostDocument } from './schemas/post.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class PostService {
  constructor(@InjectModel(InstaPost.name) private postModel: Model<PostDocument>) {}


  create(postBody: InstaPost) {
    let post = new this.postModel(postBody)
    return post.save();
  }

  findAll() {
    return this.postModel.find();
  }

  findOne(id: string) {
    return this.postModel.findById(id);
  }

  async updateLike(id: string, user: string) {
    let post = await this.postModel.findById(id);

    if(post.likers.includes(user)){
      post.likers = post.likers.filter((liker) => liker != user)
    }
    else{
      post.likers.push(user);
    }
    return post.save()
  }

  remove(id: string) {
    return this.postModel.findByIdAndRemove(id);
  }
}
