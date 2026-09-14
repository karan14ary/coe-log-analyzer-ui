import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';

import {
  RouterLink
} from '@angular/router';

import {
  CommonModule
} from '@angular/common';

import {
  Subscription
} from 'rxjs';

import {
  MetricCardComponent
} from '../../../shared/components/metric-card/metric-card.component';

import {
  AnalysisStateService
} from '../../../core/services/analysis-state.service';

import {
  LogAnalysisResult
} from '../../../core/models/log-analysis.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MetricCardComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit, OnDestroy {

  result: LogAnalysisResult | null = null;
  private sub: Subscription | null = null;

  constructor(private analysisState: AnalysisStateService) {}

  ngOnInit(): void {
    this.sub = this.analysisState.result$.subscribe(res => {
      this.result = res;
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

}

