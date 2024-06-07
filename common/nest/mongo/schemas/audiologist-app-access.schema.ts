import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AudiologistAppAccessDocument = AudiologistAppAccess & Document;

@Schema()
export class AudiologistAppAccess {
  @Prop(String)
  username: string;

  @Prop(String)
  accessId: string;

  @Prop(String)
  token: string;

  @Prop([])
  permissions: any[];
}

export const AudiologistAppAccessSchema = SchemaFactory.createForClass(AudiologistAppAccess);
