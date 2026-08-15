import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-severity-badge',
  standalone: true,
  imports: [],
  templateUrl: './severity-badge.component.html',
  styleUrl: './severity-badge.component.scss'
})
export class SeverityBadgeComponent {
  @Input()
  severity = 'INFO';

}
