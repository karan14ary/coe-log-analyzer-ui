import {
  Component
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  Router
} from '@angular/router';

import { forkJoin } from 'rxjs';
import { map, tap } from 'rxjs/operators';

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

  selectedFiles: File[] = [];

  loading = false;

  error: string | null = null;

  constructor(
    private readonly logAnalysisService: LogAnalysisService,
    private readonly logServiceExtra: LogAnalysisService, // using same instance but for clarity in orchestration
    private readonly analysisState: AnalysisStateService,
    private readonly router: Router
  ) {}

  onFilesSelected(
    event: Event
  ): void {

    const input =
      event.target as HTMLInputElement;

    if (!input.files?.length) {
      return;
    }

    this.selectedFiles =
      Array.from(input.files);

    this.error = null;
  }

  removeFile(index: number): void {
    this.selectedFiles.splice(index, 1);
  }

  async analyze(): Promise<void> {

    if (this.selectedFiles.length === 0) {
      this.error = 'Please select at least one log file.';
      return;
    }

    this.loading = true;
    this.error = null;

    try {
      // Merge all files into one for the backend
      const mergedBlob = await this.mergeFiles(this.selectedFiles);
      const file = new File([mergedBlob], 'merged_logs.log', { type: 'text/plain' });

      // Orchestrate multiple backend calls for a "Smart" experience
      forkJoin({
        eventAnalyses: this.logAnalysisService.analyze(file),
        rca: this.logAnalysisService.rca(file),
        anomalies: this.logAnalysisService.anomalies(file),
        errorGroups: this.logServiceExtra.group(file),
        timeline: this.logServiceExtra.timeline(file)
      }).subscribe({
        next: (results) => {
          this.analysisState.setResult(results);
          this.loading = false;
          this.router.navigate(['/analysis']);
        },
        error: (error) => {
          console.error(error);
          this.error = 'Analysis failed. Please check the backend connection.';
          this.loading = false;
        }
      });
    } catch (e) {
      console.error(e);
      this.error = 'Failed to process files.';
      this.loading = false;
    }
  }

  private async mergeFiles(files: File[]): Promise<Blob> {
    const parts: BlobPart[] = [];
    for (const file of files) {
      const content = await file.text();
      parts.push(content);
      if (!content.endsWith('\n')) {
        parts.push('\n'); // Ensure separation between files
      }
    }
    return new Blob(parts, { type: 'text/plain' });
  }
}



