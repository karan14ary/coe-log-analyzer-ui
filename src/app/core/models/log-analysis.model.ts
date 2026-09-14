import {Anomaly} from './anomaly.model';
import { RcaAnalysisResult } from './rca.model';

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

export interface LogEvent {
  timestamp: string;
  level: string;
  message: string;
  logger: string;
  thread: string;
  metadata: Record<string, string>;
}

export interface ExceptionInfo {
  type: string;
  message: string;
  stackTrace: string;
  cause?: ExceptionInfo;
}

export interface MaskingResult {
  maskedMessage: string;
  maskedValues: string[];
  sensitiveKeys: string[];
}

export interface FingerprintInfo {
  fingerprint: string;
  algorithm: string;
}

export interface LogEventAnalysis {
  event: LogEvent;
  exceptionInfo: ExceptionInfo;
  maskingResult: MaskingResult;
  fingerprintInfo: FingerprintInfo;
  traceId: string;
  correlationId: string;
}

export interface ErrorGroupSummary {
  fingerprint: string;
  normalizedMessage: string;
  occurrenceCount: number;
  firstOccurrence: string;
  lastOccurrence: string;
  samples?: LogEventAnalysis[];
}

export interface TimelineTrace {
  traceId: string;
  correlationId: string;
  startTime: string;
  endTime: string;
  duration: string;
  eventCount: number;
  errorCount: number;
  rootCauseFingerprint: string;
  events: LogEventAnalysis[];
}

export interface LogAnalysisResult {
  eventAnalyses: LogEventAnalysis[];
  rca?: RcaAnalysisResult;
  anomalies?: AnomalyDetectionResult;
  errorGroups?: ErrorGroupingResult;
  timeline?: TimelineTrace[];
}

export interface ErrorGroupingResult {
  totalEvents: number;
  uniqueFingerprints: number;
  groups: ErrorGroupSummary[];
}

export interface AnomalyDetectionResult {
  totalEvents: number;
  totalGroups: number;
  totalTraces: number;
  anomalyCount: number;
  anomalies: Anomaly[];
}
