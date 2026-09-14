import {
  Component,
  OnDestroy
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  Subscription
} from 'rxjs';

import {
  AnalysisStateService
} from '../../../core/services/analysis-state.service';

import {
  LogAnalysisResult
} from '../../../core/models/log-analysis.model';

import {
  Anomaly
} from '../../../core/models/anomaly.model';

import {
  SeverityBadgeComponent
} from '../../../shared/components/severity-badge/severity-badge.component';

@Component({
  selector: 'app-anomalies',

  standalone: true,

  imports: [
    CommonModule,
    SeverityBadgeComponent
  ],

  templateUrl:
    './anomalies.component.html',

  styleUrl:
    './anomalies.component.scss'
})
export class AnomaliesComponent
  implements OnDestroy {

  anomalies: Anomaly[] = [];

  private readonly subscription:
    Subscription;

  constructor(
    private readonly state:
    AnalysisStateService
  ) {

    this.subscription =
      this.state.result$
        .subscribe((result: LogAnalysisResult | null) => {

          this.anomalies =
            result?.anomalies ?? [];

        });
  }

  ngOnDestroy(): void {

    this.subscription.unsubscribe();

  }
}
