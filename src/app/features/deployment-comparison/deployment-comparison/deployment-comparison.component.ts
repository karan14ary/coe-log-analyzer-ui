import {
  Component
} from '@angular/core';

import {
  DeploymentService
} from '../../../core/services/deployment.service';

import {
  DeploymentComparison
} from '../../../core/models/deployment-comparision.model';

import {
  DeploymentResultComponent
} from '../deployment-result/deployment-result.component';

@Component({
  selector: 'app-deployment-comparison',

  standalone: true,

  imports: [
    DeploymentResultComponent
  ],

  templateUrl:
    './deployment-comparison.component.html',

  styleUrl:
    './deployment-comparison.component.scss'
})
export class DeploymentComparisonComponent {

  beforeFile: File | null = null;

  afterFile: File | null = null;

  result:
    DeploymentComparison | null = null;

  loading = false;

  error: string | null = null;

  constructor(
    private readonly service:
    DeploymentService
  ) {}

  selectBefore(
    event: Event
  ): void {

    const input =
      event.target as HTMLInputElement;

    if (input.files?.length) {

      this.beforeFile =
        input.files[0];

    }

  }

  selectAfter(
    event: Event
  ): void {

    const input =
      event.target as HTMLInputElement;

    if (input.files?.length) {

      this.afterFile =
        input.files[0];

    }

  }

  compare(): void {

    if (
      !this.beforeFile ||
      !this.afterFile
    ) {

      this.error =
        'Select both deployment logs.';

      return;

    }

    this.loading = true;

    this.error = null;

    this.service
      .compare(
        this.beforeFile,
        this.afterFile
      )
      .subscribe({

        next: result => {

          this.result = result;

          this.loading = false;

        },

        error: error => {

          console.error(error);

          this.error =
            'Deployment comparison failed.';

          this.loading = false;

        }

      });

  }

}
