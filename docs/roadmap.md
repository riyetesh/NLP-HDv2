# Development roadmap

## Phase 0 — Foundations
- [x] Create standalone repository and initial project scaffold
- [ ] Confirm consultation form fields and data ownership
- [ ] Choose video/signalling provider after a small technical evaluation
- [ ] Define threat model, privacy boundaries, and synthetic test data

## Phase 1 — Reliable consultation session
- [ ] Patient and clinician room flow
- [ ] Camera/microphone permissions and device selection
- [ ] Join, leave, reconnect, and network-failure states
- [ ] Consent and session lifecycle controls

## Phase 2 — Live transcription
- [ ] Provider-neutral streaming transcription interface
- [ ] Timestamped transcript segments
- [ ] Speaker attribution strategy and manual correction
- [ ] Latency, word error rate, and speaker attribution evaluation

## Phase 3 — Structured clinical extraction
- [ ] Define versioned clinical form schema
- [ ] Extract candidate facts from transcript segments
- [ ] Handle negation, uncertainty, temporality, and contradictions
- [ ] Preserve evidence and provenance for every proposed field

## Phase 4 — Review and confidence
- [ ] Display suggestions alongside source evidence
- [ ] Implement the 1–4 evidence-strength scale
- [ ] Support clinician correction, acceptance, and rejection
- [ ] Prevent AI suggestions from overwriting clinician-approved values
- [ ] Measure field-level accuracy and confidence calibration

## Phase 5 — Validation and HelloDoc integration
- [ ] Run end-to-end tests using synthetic consultations
- [ ] Security, privacy, and failure-mode review
- [ ] Define authenticated integration contract
- [ ] Map approved data into HelloDoc's doctor workflow

## Evaluation metrics

Track transcription word error rate, speaker attribution accuracy, clinical entity precision/recall, negation accuracy, field-level extraction accuracy, confidence calibration, end-to-end latency, and clinician correction rate. Set numeric targets only after establishing a representative baseline.
