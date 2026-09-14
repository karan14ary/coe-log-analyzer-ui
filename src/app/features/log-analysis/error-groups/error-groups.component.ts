import {
  Component,
  OnInit,
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
  ErrorGroupSummary,
  ErrorGroupingResult
} from '../../../core/models/log-analysis.model';

import {
  SeverityBadgeComponent
} from '../../../shared/components/severity-badge/severity-badge.component';

import {
  EmptyStateComponent
} from '../../../shared/components/empty-state/empty-state.component';

@Component({
  selector: 'app-error-groups',

  standalone: true,

  imports: [
    CommonModule,
    SeverityBadgeComponent,
    EmptyStateComponent
  ],

  templateUrl:
    './error-groups.component.html',

  styleUrl:
    './error-groups.component.scss'
})
export class ErrorGroupsComponent
  implements OnInit, OnDestroy {

  private subscription: Subscription | null = null;

  groups: ErrorGroupSummary[] = [];

  constructor(
    private readonly state: AnalysisStateService
  ) {}

  ngOnInit(): void {
    this.subscription = this.state.result$.subscribe(result => {
      this.groups = result?.errorGroups?.groups ?? [];
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}

import { LogAnalysisService } from '../../../core/services/log-analysis.service';
