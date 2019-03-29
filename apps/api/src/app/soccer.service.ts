import { Injectable } from '@nestjs/common';

@Injectable()
export class SoccerService {

  continents = [{ name: 'Europe' }]

  getContinents() {
    return this.continents;
  }
}
