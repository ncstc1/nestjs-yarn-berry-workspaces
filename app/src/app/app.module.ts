import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { MongoModule, AudiologistAppAccess, AudiologistAppAccessSchema } from 'test-mongo-module';

@Module({
  imports: [
    HttpModule,
    MongoModule,
    MongooseModule.forFeature([{ name: AudiologistAppAccess.name, schema: AudiologistAppAccessSchema }]),
  ],
  providers: [
    ConfigService,
  ]
})
export class TestAppModule {}
