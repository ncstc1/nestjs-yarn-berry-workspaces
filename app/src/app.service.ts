import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  private version;
  private commit;
  constructor(private configService: ConfigService) {
    this.version = this.configService.get<string>('global.app.versionGitTag');
    this.commit = this.configService.get<string>('global.app.commitSHA');
  }

  getHello(): any {
    return {
      message: 'The server is up and running!',
      version: this.version,
      commit: this.commit,
    };
  }
}
