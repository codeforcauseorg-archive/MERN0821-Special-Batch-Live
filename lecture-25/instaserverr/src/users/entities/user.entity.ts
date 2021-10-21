import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  content: name;
  @Prop()
  content: email;
}

export const ImageSchema = SchemaFactory.createForClass(User);
