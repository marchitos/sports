import { async, TestBed } from '@angular/core/testing';
import { SoccerModule } from './soccer.module';

describe('SoccerModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SoccerModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SoccerModule).toBeDefined();
  });
});
