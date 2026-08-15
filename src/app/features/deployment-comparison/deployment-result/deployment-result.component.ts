import {
  Component,
  Input
} from '@angular/core';

import {
  DeploymentComparison
} from "../../../core/models/deployment-comparision.model";

@Component({
  selector: 'app-deployment-result',

  standalone: true,

  templateUrl:
    './deployment-result.component.html',

  styleUrl:
    './deployment-result.component.scss'
})
export class DeploymentResultComponent {

  @Input()
  result:
    DeploymentComparison | null = null;

}
