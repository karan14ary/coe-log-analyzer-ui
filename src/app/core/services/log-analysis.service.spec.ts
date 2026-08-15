import { TestBed } from '@angular/core/testing';

import { LogAnalysisService } from './log-analysis.service';

describe('LogAnalysisService', () => {
  let service: LogAnalysisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogAnalysisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
