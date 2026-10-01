COE AI Log Analyzer - Dummy Test Log Pack

Purpose:
These files are intentionally synthetic and are designed to exercise the backend features built for the AI Log Analyzer.

Files:
01_baseline.log
    Normal baseline traffic with INFO/WARN/ERROR events.

02_deployment_after.log
    Post-deployment traffic showing improvement in latency and fewer notification failures.

03_errors_and_stacktraces.log
    Java exceptions, stack traces, PostgreSQL errors, rate-limit errors.

04_pii_and_secret_masking.log
    Email, phone, card number, CVV, bearer token, database password and SSN.
    Useful for PII/secret masking and overlap-masking tests.

05_trace_correlation.log
    traceId/spanId/parentSpanId/requestId relationships for correlation analysis.

06_timeline_anomaly.log
    Latency spikes, connection-pool exhaustion, database timeout, HTTP 503 and recovery.

07_before_deployment.log
    Metrics before deployment version 2.5.0.

08_after_deployment.log
    Metrics after deployment version 2.5.0, including an intentional payment-service regression.

09_mixed_production.log
    End-to-end mixed scenario with retry followed by recovery.

Suggested feature coverage:
- Smart Log Parser
- Error Grouping
- Exception / Stack Trace Analyzer
- Log Fingerprinting
- AI RCA
- Severity Detection
- PII / Secret Masking
- Trace / Correlation ID analysis
- Timeline Reconstruction
- Anomaly Detection
- Incident Report
- Before / After Deployment Comparison
- DeploymentComparisonPromptBuilder

Deployment comparison:
Use 07_before_deployment.log as BEFORE and 08_after_deployment.log as AFTER.
Expected deterministic conclusion:
Overall mixed result. API Gateway and Order Service improved, but Payment Service degraded significantly. CPU/memory/GC pressure also increased. The AI layer should identify the payment regression and recommend investigation of the new payment-service version/dependency behavior.

All values are fictional. Do not use these files as real production data.
