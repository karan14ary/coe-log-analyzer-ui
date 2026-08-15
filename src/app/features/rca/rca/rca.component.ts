import {
  Component,
  Input
} from '@angular/core';

import {
  RcaAnalysis
} from '../../../core/models/rca.model';

@Component({
  selector: 'app-rca',

  standalone: true,

  templateUrl:
    './rca.component.html',

  styleUrl:
    './rca.component.scss'
})
export class RcaComponent {

  @Input()
  rca: RcaAnalysis | null = null;

}
