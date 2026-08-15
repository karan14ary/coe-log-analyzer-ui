import {
  Component
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  LogAnalysisService
} from '../../../core/services/log-analysis.service';

import {
  IncidentReport
} from '../../../core/models/incident-report.model';

import {
  SeverityBadgeComponent
} from '../../../shared/components/severity-badge/severity-badge.component';

import {
  RcaComponent
} from '../../rca/rca/rca.component';

@Component({
  selector: 'app-incident-report',

  standalone: true,

  imports: [
    CommonModule,
    SeverityBadgeComponent,
    RcaComponent
  ],

  templateUrl:
    './incident-report.component.html',

  styleUrl:
    './incident-report.component.scss'
})
export class IncidentReportComponent {

  selectedFile: File | null = null;

  report: IncidentReport | null = null;

  loading = false;

  error: string | null = null;

  constructor(
    private readonly service:
    LogAnalysisService
  ) {}

  selectFile(
    event: Event
  ): void {

    const input =
      event.target as HTMLInputElement;

    if (input.files?.length) {

      this.selectedFile =
        input.files[0];

    }
  }

  generate(): void {

    if (!this.selectedFile) {

      this.error =
        'Select a log file first.';

      return;

    }

    this.loading = true;

    this.error = null;

    this.service
      .incidentReport(this.selectedFile)
      .subscribe({

        next: report => {

          this.report = report;

          this.loading = false;

        },

        error: error => {

          console.error(error);

          this.error =
            'Unable to generate incident report.';

          this.loading = false;

        }

      });

  }

  downloadMarkdown(): void {

    if (!this.selectedFile) {
      return;
    }

    this.service
      .incidentReportMarkdown(
        this.selectedFile
      )
      .subscribe(markdown => {

        const blob =
          new Blob(
            [markdown],
            {
              type: 'text/markdown'
            }
          );

        const url =
          URL.createObjectURL(blob);

        const anchor =
          document.createElement('a');

        anchor.href = url;

        anchor.download =
          'incident-report.md';

        anchor.click();

        URL.revokeObjectURL(url);

      });

  }
}
