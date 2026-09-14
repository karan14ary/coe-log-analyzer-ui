export interface RcaResult {
  rootCause: string;
  confidence: number;
  impact: string;
  evidence: any[];
  recommendations: string[];
}

export interface RcaAnalysisResult {
  successful: boolean;
  result: RcaResult | null;
  error?: string;
}
