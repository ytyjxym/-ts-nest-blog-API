import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  
  getHome() {
    return { message: 'Hello world!' };
  }
}
