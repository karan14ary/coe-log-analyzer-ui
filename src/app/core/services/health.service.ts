import {
  Injectable
} from '@angular/core';

import {
  HttpClient
} from '@angular/common/http';

import {
  Observable
} from 'rxjs';

export interface HealthStatus {

  application: string;

  ollama: string;

}

@Injectable({
  providedIn: 'root'
})
export class HealthService {

  private readonly url =
    'http://localhost:8080/api/v1/health';

  constructor(
    private readonly http: HttpClient
  ) {}

  check(): Observable<HealthStatus> {

    return this.http.get<HealthStatus>(
      this.url
    );

  }

}
