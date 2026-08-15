import {
  Component,
  OnDestroy
} from '@angular/core';

import {
  Subscription
} from 'rxjs';

import {
  AnalysisStateService
} from '../../../core/services/analysis-state.service';

import {
  TimelineEvent
} from '../../../core/models/log-analysis.model';

import {
  SeverityBadgeComponent
} from '../../../shared/components/severity-badge/severity-badge.component';

@Component({
  selector: 'app-timeline',

  standalone: true,

  imports: [
    SeverityBadgeComponent
  ],

  templateUrl:
    './timeline.component.html',

  styleUrl:
    './timeline.component.scss'
})
export class TimelineComponent
  implements OnDestroy {

  events: TimelineEvent[] = [];

  private readonly subscription:
    Subscription;

  constructor(
    private readonly state:
    AnalysisStateService
  ) {

    this.subscription =
      this.state.result$
        .subscribe(result => {

          this.events =
            result?.timeline ?? [];

        });
  }

  ngOnDestroy(): void {

    this.subscription.unsubscribe();

  }
}
