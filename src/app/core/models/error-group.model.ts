export interface ErrorGroup {

  fingerprint: string;

  normalizedMessage: string;

  count: number;

  firstOccurrence: string;

  lastOccurrence: string;

  samples: LogSample[];

}

export interface LogSample {

  timestamp: string;

  level: string;

  message: string;

  logger?: string;

  thread?: string;

  traceId?: string;

  spanId?: string;

}
