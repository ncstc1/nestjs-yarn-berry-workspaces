import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { RouterModule, Routes } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestAppModule } from './app/app.module';

const routes : Routes = [
  {
    path: '/test/v1',
    module: TestAppModule,
  },
];

@Module({
  imports: [
    TestAppModule,
    RouterModule.register(routes)],
  controllers: [AppController],
  providers: [AppService, ConfigService],
})
export class AppModule {}
