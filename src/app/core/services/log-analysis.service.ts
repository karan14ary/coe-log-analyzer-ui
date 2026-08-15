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
  LogAnalysisResult
} from '../models/log-analysis.model';

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
  ): Observable<LogAnalysisResult> {

    const formData =
      new FormData();

    formData.append(
      'file',
      file
    );

    return this.http.post<LogAnalysisResult>(
      `${this.baseUrl}/analyze`,
      formData
    );
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
