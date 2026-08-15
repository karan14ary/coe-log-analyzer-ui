import {Anomaly} from './anomaly.model';

export interface LogAnalysisResult {

  totalEvents: number;

  totalErrors: number;

  totalWarnings: number;

  totalCritical: number;

  totalAnomalies: number;

  severityDistribution: SeverityDistribution;

  errorGroups: ErrorGroupSummary[];

  anomalies: Anomaly[];

  timeline: TimelineEvent[];

}

export interface SeverityDistribution {

  critical: number;

  error: number;

  warning: number;

  info: number;

  debug: number;

}

export interface ErrorGroupSummary {

  fingerprint: string;

  normalizedMessage: string;

  count: number;

  firstOccurrence: string;

  lastOccurrence: string;

}

export interface TimelineEvent {

  timestamp: string;

  level: string;

  message: string;

  fingerprint?: string;

}
