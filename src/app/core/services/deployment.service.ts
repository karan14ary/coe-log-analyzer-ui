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
  DeploymentComparison
} from '../models/deployment-comparision.model';

@Injectable({
  providedIn: 'root'
})
export class DeploymentService {

  private readonly baseUrl =
    'http://localhost:8080/api/v1/logs';

  constructor(
    private readonly http: HttpClient
  ) {}

  compare(
    before: File,
    after: File
  ): Observable<DeploymentComparison> {

    const formData =
      new FormData();

    formData.append(
      'before',
      before
    );

    formData.append(
      'after',
      after
    );

    return this.http.post<DeploymentComparison>(
      `${this.baseUrl}/deployment-comparison`,
      formData
    );
  }

}
