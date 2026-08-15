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
  ErrorGroupSummary
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
  implements OnDestroy {

  groups: ErrorGroupSummary[] = [];

  private readonly subscription:
    Subscription;

  constructor(
    private readonly state:
    AnalysisStateService
  ) {

    this.subscription =
      this.state.result$
        .subscribe(result => {

          this.groups =
            result?.errorGroups ?? [];

        });
  }

  ngOnDestroy(): void {

    this.subscription.unsubscribe();

  }
}
