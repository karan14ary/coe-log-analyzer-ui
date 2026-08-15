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
  MetricCardComponent
} from '../../../shared/components/metric-card/metric-card.component';

import {
  EmptyStateComponent
} from '../../../shared/components/empty-state/empty-state.component';

@Component({
  selector: 'app-analysis-summary',
  standalone: true,
  imports: [CommonModule,
    MetricCardComponent,
    EmptyStateComponent],
  templateUrl: './analysis-summary.component.html',
  styleUrl: './analysis-summary.component.scss'
})
export class AnalysisSummaryComponent
  implements OnDestroy {

  result:
    LogAnalysisResult | null = null;

  private readonly subscription:
    Subscription;

  constructor(
    private readonly analysisState:
    AnalysisStateService
  ) {

    this.subscription =
      this.analysisState.result$
        .subscribe(result => {

          this.result = result;

        });
  }

  ngOnDestroy(): void {

    this.subscription.unsubscribe();

  }
}
