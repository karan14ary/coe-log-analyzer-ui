import { Injectable } from '@angular/core';

import {
  BehaviorSubject
} from 'rxjs';

import {
  LogAnalysisResult,
  LogEventAnalysis
} from '../models/log-analysis.model';

@Injectable({
  providedIn: 'root'
})
export class AnalysisStateService {

  private readonly resultSubject =
    new BehaviorSubject<LogAnalysisResult | null>(
      null
    );

  readonly result$ =
    this.resultSubject.asObservable();

  setResult(
    result: LogAnalysisResult
  ): void {

    this.resultSubject.next(result);
  }

  getResult(): LogAnalysisResult | null {

    return this.resultSubject.value;

  }

  updateResult(partial: Partial<LogAnalysisResult>): void {
    const current = this.getResult();
    if (current) {
      this.setResult({ ...current, ...partial });
    }
  }

  clear(): void {

    this.resultSubject.next(null);

  }

}
