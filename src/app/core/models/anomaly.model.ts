export interface Anomaly {

  type: string;

  severity: string;

  score: number;

  description: string;

  timestamp?: string;

  fingerprint?: string;

}
