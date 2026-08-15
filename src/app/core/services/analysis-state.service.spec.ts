import { TestBed } from '@angular/core/testing';

import { AnalysisStateService } from './analysis-state.service';

describe('AnalysisStateService', () => {
  let service: AnalysisStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnalysisStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
