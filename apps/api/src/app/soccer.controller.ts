import { Controller, Get } from '@nestjs/common';

import { SoccerService } from './soccer.service';

@Controller()
export class SoccerController {
  constructor(private readonly soccer: SoccerService) {}

  @Get('continents')
  getContinents() {
    return this.soccer.getContinents();
  }
}
