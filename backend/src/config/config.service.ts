import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppConfigService {
    constructor(private configService: ConfigService) {}
  
    get env(): string {
        return this.configService.get<string>('app.appEnv');
    }
    get port(): number {
        return Number(this.configService.get<number>('app.appPort'));
    }
    get host(): string {
        return this.configService.get<string>('app.appHost');
    }
    get url(): string {
        return this.configService.get<string>('app.appUrl');
    }
}