import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { MongoService } from './mongo.service';

@Module({
  imports: [ConfigModule.forRoot({ignoreEnvFile: true}),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        const mongoServerUri = configService.get<string>('mongo.uri');
        const mongoServerDb = configService.get<string>('mongo.database');
        return {
          uri: `${mongoServerUri}${mongoServerDb}`,
        };
      },
      inject: [ConfigService],
    }),
  ],
  exports: [MongoService],
  providers: [MongoService],
})
export class MongoModule {}
