export interface RcaAnalysis {

  successful: boolean;

  rootCause: string;

  confidence: number;

  impact: string;

  evidence: string[];

  recommendations: string[];

}
