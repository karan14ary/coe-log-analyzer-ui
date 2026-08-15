import { Anomaly } from './anomaly.model';
import { RcaAnalysis } from './rca.model';

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

  anomalies: Anomaly[];

  rca: RcaAnalysis;

  recommendations: string[];

}
