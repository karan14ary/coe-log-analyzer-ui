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

  get totalEvents(): number {
    return this.result?.eventAnalyses?.length ?? 0;
  }

  get errorCount(): number {
    return this.result?.eventAnalyses?.filter(e => e.event.level === 'ERROR').length ?? 0;
  }

  get warningCount(): number {
    return this.result?.eventAnalyses?.filter(e => e.event.level === 'WARN').length ?? 0;
  }

  get rcaConfidence(): string {
    return (this.result?.rca?.result?.confidence ? (this.result.rca.result.confidence * 100).toFixed(0) : '0') + '%';
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

}

