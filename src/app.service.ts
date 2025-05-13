import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const testeLucas = 'teste string'
    return 'Hello World!';
  }
}
