import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-metric-card',
  standalone: true,
  imports: [],
  templateUrl: './metric-card.component.html',
  styleUrl: './metric-card.component.scss'
})
export class MetricCardComponent {
  @Input()
  label = '';

  @Input()
  value: string | number = '';

  @Input()
  subtitle = '';

}
