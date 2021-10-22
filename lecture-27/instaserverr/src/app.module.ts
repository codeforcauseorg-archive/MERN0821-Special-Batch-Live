import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ImagesModule } from './images/images.module';
import { MongooseModule } from '@nestjs/mongoose';
import { FirebaseModule } from './firebase/firebase.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ImagesModule,
    MongooseModule.forRoot(
      'mongodb+srv://anujgarg:anujgarg@merncourse.8b0lx.mongodb.net/instaclone?retryWrites=true&w=majority',
    ),
    FirebaseModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
