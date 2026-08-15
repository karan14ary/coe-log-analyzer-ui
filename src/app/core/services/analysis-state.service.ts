import { Injectable } from '@angular/core';

import {
  BehaviorSubject
} from 'rxjs';

import {
  LogAnalysisResult
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

  clear(): void {

    this.resultSubject.next(null);

  }

}
