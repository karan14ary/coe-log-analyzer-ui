import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { AnalysisStateService } from '../../../core/services/analysis-state.service';

@Component({
  selector: 'app-rca',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rca.component.html',
  styleUrl: './rca.component.scss'
})
export class RcaComponent implements OnInit, OnDestroy {
  @Input() rca: any = null;

  private sub: Subscription | null = null;
  private isStandalone = true;

  constructor(private analysisState: AnalysisStateService) {}

  ngOnInit(): void {
    if (this.rca) {
      this.isStandalone = false;
      return;
    }

    this.sub = this.analysisState.result$.subscribe(res => {
      this.rca = res ? res.analysis : null;
    });
  }

  ngOnDestroy(): void {
    if (this.isStandalone) {
      this.sub?.unsubscribe();
    }
  }

}
