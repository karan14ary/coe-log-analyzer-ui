import {
  Component
} from '@angular/core';

import {
  RouterLink
} from '@angular/router';

import {
  MetricCardComponent
} from '../../../shared/components/metric-card/metric-card.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ RouterLink,
    MetricCardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}

