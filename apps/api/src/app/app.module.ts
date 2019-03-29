import { Module } from '@nestjs/common';

import { SoccerController } from './soccer.controller';
import { SoccerService } from './soccer.service';

@Module({
  imports: [],
  controllers: [SoccerController],
  providers: [SoccerService],
})
export class AppModule {}
