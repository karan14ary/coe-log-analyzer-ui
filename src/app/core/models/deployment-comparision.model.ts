export interface DeploymentComparison {

  summary: DeploymentComparisonSummary;

  metrics: DeploymentMetrics;

  errors: ErrorComparison;

  anomalies: AnomalyComparison;

  recommendations: string[];

  aiAnalysis?: string;

}

export interface DeploymentComparisonSummary {

  status:
    | 'IMPROVED'
    | 'REGRESSED'
    | 'MIXED'
    | 'UNCHANGED';

  message: string;

  improvementCount: number;

  regressionCount: number;

}

export interface DeploymentMetrics {

  beforeEvents: number;

  afterEvents: number;

  eventDifference: number;

  beforeErrors: number;

  afterErrors: number;

  errorDifference: number;

  beforeErrorRate: number;

  afterErrorRate: number;

  errorRateDifference: number;

  beforeTraces: number;

  afterTraces: number;

  affectedTracesBefore: number;

  affectedTracesAfter: number;

}

export interface ErrorComparison {

  newErrors: string[];

  resolvedErrors: string[];

  persistentErrors: string[];

  increasedErrors: string[];

  decreasedErrors: string[];

}

export interface AnomalyComparison {

  newAnomalies: string[];

  resolvedAnomalies: string[];

  persistentAnomalies: string[];

}
