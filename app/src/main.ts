import * as fs from 'fs';
import * as process from 'process';
import { NestFactory, PartialGraphHost } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as expressBearerToken from 'express-bearer-token';
import * as cookieParser from 'cookie-parser';
import { AppModule } from './app.module';

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule, {
      snapshot: true,
      abortOnError: false, // See https://docs.nestjs.com/devtools/overview#investigating-the-cannot-resolve-dependency-error
    });

    app.use(expressBearerToken());
    app.use(cookieParser());

    const options = new DocumentBuilder()
      .setTitle('Test mongo/nestjs')
      .setVersion('1.0')
      .addBearerAuth()
      .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('test/api', app, document);

    await app.listen(3001);
  } catch(e) {
    console.error(`Application fatal error on startup: ${e}`);
    fs.writeFileSync('graph.json', PartialGraphHost.toString() ?? '');
    process.exit(1);
  }
}
bootstrap();
