import { Test } from '@nestjs/testing';

import { SoccerService } from './soccer.service';

describe('SoccerService', () => {
  let service: SoccerService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [SoccerService],
    }).compile();

    service = app.get<SoccerService>(SoccerService);
  });

  describe('getData', () => {
    it('should return "Welcome to api!"', () => {
      expect(service.getData()).toEqual({message: 'Welcome to api!'});
    });
  });
});
