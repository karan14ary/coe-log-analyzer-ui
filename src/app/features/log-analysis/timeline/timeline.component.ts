import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';

import {
  Subscription
} from 'rxjs';

import {
  AnalysisStateService
} from '../../../core/services/analysis-state.service';

import {
  CommonModule
} from '@angular/common';

import {
  LogAnalysisResult,
  TimelineTrace
} from '../../../core/models/log-analysis.model';

import {
  SeverityBadgeComponent
} from '../../../shared/components/severity-badge/severity-badge.component';

@Component({
  selector: 'app-timeline',

  standalone: true,

  imports: [
    CommonModule,
    SeverityBadgeComponent
  ],

  templateUrl:
    './timeline.component.html',

  styleUrl:
    './timeline.component.scss'
})
export class TimelineComponent
  implements OnInit, OnDestroy {

  traces: TimelineTrace[] = [];

  private subscription: Subscription | null = null;

  constructor(
    private readonly state:
    AnalysisStateService
  ) { }

  ngOnInit(): void {
    this.subscription = this.state.result$
      .subscribe((result: LogAnalysisResult | null) => {
        this.traces = result?.timeline ?? [];
      });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
