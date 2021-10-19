import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { InstaPost, PostSchema } from './schemas/post.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: InstaPost.name, schema: PostSchema }])],
  controllers: [PostController],
  providers: [PostService]
})
export class PostModule {}
