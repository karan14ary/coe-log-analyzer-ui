import {
  Routes
} from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },

  {
    path: 'dashboard',
    loadComponent: () =>
      import(
        './features/dashboard/dashboard/dashboard.component'
        ).then(
        m => m.DashboardComponent
      )
  },

  {
    path: 'analyze',
    loadComponent: () =>
      import(
        './features/log-analysis/log-upload/log-upload.component'
        ).then(
        m => m.LogUploadComponent
      )
  },

  {
    path: 'analysis',
    loadComponent: () =>
      import(
        './features/log-analysis/analysis-summary/analysis-summary.component'
        ).then(
        m => m.AnalysisSummaryComponent
      )
  },

  {
    path: 'errors',
    loadComponent: () =>
      import(
        './features/log-analysis/error-groups/error-groups.component'
        ).then(
        m => m.ErrorGroupsComponent
      )
  },

  {
    path: 'anomalies',
    loadComponent: () =>
      import(
        './features/log-analysis/anomalies/anomalies.component'
        ).then(
        m => m.AnomaliesComponent
      )
  },

  {
    path: 'timeline',
    loadComponent: () =>
      import(
        './features/log-analysis/timeline/timeline.component'
        ).then(
        m => m.TimelineComponent
      )
  },

  {
    path: 'rca',
    loadComponent: () =>
      import(
        './features/rca/rca/rca.component'
        ).then(
        m => m.RcaComponent
      )
  },

  {
    path: 'incident-report',
    loadComponent: () =>
      import(
        './features/incident-report/incident-report/incident-report.component'
        ).then(
        m => m.IncidentReportComponent
      )
  },

  {
    path: 'deployment-comparison',
    loadComponent: () =>
      import(
        './features/deployment-comparison/deployment-comparison/deployment-comparison.component'
        ).then(
        m => m.DeploymentComparisonComponent
      )
  },

  {
    path: '**',
    redirectTo: 'dashboard'
  }

];
