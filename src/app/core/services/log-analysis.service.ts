import {
  Injectable
} from '@angular/core';

import {
  HttpClient
} from '@angular/common/http';

import {
  Observable
} from 'rxjs';

import {
  LogAnalysisResult,
  LogEventAnalysis,
  ErrorGroupingResult,
  TimelineTrace,
  AnomalyDetectionResult
} from '../models/log-analysis.model';

import {
  RcaAnalysisResult
} from '../models/rca.model';

import {
  IncidentReport
} from '../models/incident-report.model';

@Injectable({
  providedIn: 'root'
})
export class LogAnalysisService {

  private readonly baseUrl =
    'http://localhost:8080/api/v1/logs';

  constructor(
    private readonly http: HttpClient
  ) {}

  analyze(
    file: File
  ): Observable<LogEventAnalysis[]> {

    const formData =
      new FormData();

    formData.append(
      'file',
      file
    );

    return this.http.post<LogEventAnalysis[]>(
      `${this.baseUrl}/analyze`,
      formData
    );
  }

  parse(
    file: File
  ): Observable<any[]> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<any[]>(`${this.baseUrl}/parse`, formData);
  }

  analyzeExceptions(
    file: File
  ): Observable<LogEventAnalysis[]> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<LogEventAnalysis[]>(`${this.baseUrl}/analyze-exceptions`, formData);
  }

  group(
    file: File
  ): Observable<ErrorGroupingResult> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<ErrorGroupingResult>(`${this.baseUrl}/group`, formData);
  }

  timeline(
    file: File
  ): Observable<TimelineTrace[]> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<TimelineTrace[]>(`${this.baseUrl}/timeline`, formData);
  }

  anomalies(
    file: File
  ): Observable<AnomalyDetectionResult> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<AnomalyDetectionResult>(`${this.baseUrl}/anomalies`, formData);
  }

  rca(
    file: File
  ): Observable<RcaAnalysisResult> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<RcaAnalysisResult>(`${this.baseUrl}/rca`, formData);
  }

  incidentReport(
    file: File
  ): Observable<IncidentReport> {

    const formData =
      new FormData();

    formData.append(
      'file',
      file
    );

    return this.http.post<IncidentReport>(
      `${this.baseUrl}/incident-report`,
      formData
    );
  }

  incidentReportMarkdown(
    file: File
  ): Observable<string> {

    const formData =
      new FormData();

    formData.append(
      'file',
      file
    );

    return this.http.post(
      `${this.baseUrl}/incident-report/markdown`,
      formData,
      {
        responseType: 'text'
      }
    );
  }

}
