import {
  Component
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  Router
} from '@angular/router';

import {
  LogAnalysisService
} from '../../../core/services/log-analysis.service';

import {
  AnalysisStateService
} from '../../../core/services/analysis-state.service';
@Component({
  selector: 'app-log-upload',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './log-upload.component.html',
  styleUrl: './log-upload.component.scss'
})
export class LogUploadComponent {

  selectedFile: File | null = null;

  loading = false;

  error: string | null = null;

  constructor(
    private readonly logAnalysisService:
    LogAnalysisService,

    private readonly analysisState:
    AnalysisStateService,

    private readonly router:
    Router
  ) {}

  onFileSelected(
    event: Event
  ): void {

    const input =
      event.target as HTMLInputElement;

    if (!input.files?.length) {
      return;
    }

    this.selectedFile =
      input.files[0];

    this.error = null;
  }

  analyze(): void {

    if (!this.selectedFile) {

      this.error =
        'Please select a log file.';

      return;
    }

    this.loading = true;

    this.error = null;

    this.logAnalysisService
      .analyze(this.selectedFile)
      .subscribe({

        next: result => {

          this.analysisState
            .setResult(result);

          this.loading = false;

          this.router.navigate([
            '/analysis'
          ]);

        },

        error: error => {

          console.error(error);

          this.error =
            'Unable to analyze log file.';

          this.loading = false;

        }

      });
  }
}



