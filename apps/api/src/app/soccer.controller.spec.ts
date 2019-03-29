import { Test, TestingModule } from '@nestjs/testing';

import { SoccerController } from './soccer.controller';
import { SoccerService } from './soccer.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [SoccerController],
      providers: [SoccerService],
    }).compile();
  });

  describe('getData', () => {
    it('should return "Welcome to api!"', () => {
      const appController = app.get<SoccerController>(SoccerController);
      expect(appController.getContinents()).toEqual({message: 'Welcome to api!'});
    });
  });
});
