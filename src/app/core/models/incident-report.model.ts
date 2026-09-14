import { Anomaly } from './anomaly.model';
import { RcaAnalysisResult } from './rca.model';

export interface IncidentReport {
  incidentId: string;
  title: string;
  severity: string;
  summary: string;
  startTime: string;
  endTime: string;
  duration: string;
  totalEvents: number;
  totalErrors: number;
  totalTraces: number;
  affectedTraces: number;
  fingerprints: string[];
  anomalies: Anomaly[];
  rca: RcaAnalysisResult;
  recommendations: string[];
}
