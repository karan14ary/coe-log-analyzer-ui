import {Anomaly} from './anomaly.model';

export interface AiAnalysisResult {
  summary: string;
  rootCause: string;
  impact: string;
  observations: string[];
  recommendations: string[];
  severity: string;
  confidence: number;
  evidence?: string[];
}

export interface LogAnalysisResult {
  totalLines: number;
  errorCount: number;
  warningCount: number;
  analysis: AiAnalysisResult;
  anomalies?: Anomaly[];
  errorGroups?: ErrorGroupSummary[];
  timeline?: TimelineEvent[];
}

// Keeping these for backward compatibility if needed by other components,
// but the Backend current response uses the above.
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
