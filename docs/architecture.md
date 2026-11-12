# Initial architecture

## Consultation data flow

1. A patient and clinician join an authenticated consultation room.
2. The media layer carries audio/video. Where supported, the application keeps participant audio tracks separate.
3. A transcription adapter emits timestamped transcript segments with speaker identity and transcription metadata.
4. The extraction pipeline identifies candidate clinical facts and their context.
5. A schema mapper proposes values for predefined consultation fields.
6. Validation checks types, allowed values, negation, uncertainty, contradictions, and missing evidence.
7. The interface displays proposed values alongside supporting transcript evidence and an extraction-confidence indicator.
8. The clinician edits, rejects, or accepts suggestions. Only clinician-approved values can become a finalized record.

## Important distinctions

- **Not discussed:** no supporting statement was found. Do not infer a negative.
- **Explicitly denied:** the speaker clearly states that a symptom or condition is absent.
- **Uncertain:** the speaker expresses doubt or cannot recall.
- **Contradictory:** multiple statements conflict and need clinician review.
- **AI suggestion:** an unapproved extraction.
- **Clinician-approved value:** a value explicitly reviewed and accepted by the clinician.

## Confidence model

The initial 1–4 scale describes the strength and clarity of evidence supporting an extraction:

| Score | Meaning |
|---|---|
| 1 | Insufficient, missing, or highly ambiguous evidence |
| 2 | Weak or incomplete evidence; clarification needed |
| 3 | Clear evidence with limited ambiguity |
| 4 | Explicit, unambiguous evidence directly supporting the field |

A score is not a probability, diagnosis, or measure of whether the patient's statement is true. It must be evaluated against labelled examples; a language model's self-reported confidence is not sufficient.

Every populated field should retain, where available:
- Proposed value and normalized value
- Source transcript segment IDs
- Speaker and timestamps
- Evidence quote
- Negation / uncertainty / temporality status
- Confidence score and reason
- Review status, reviewer, and review timestamp

## Suggested service boundaries

- `media/`: room/session orchestration and provider integration
- `transcription/`: streaming ASR adapter and transcript normalization
- `extraction/`: clinical entity and context extraction
- `validation/`: schema, contradiction, and evidence checks
- `consultations/`: session lifecycle and clinician review workflow

## Security and privacy constraints

Use synthetic conversations until a privacy and security review is complete. Before any real patient data is processed, define lawful basis and consent flows where applicable, data minimization, retention/deletion, access control, audit logging, encryption, processor agreements, and data residency. A hosting provider or database choice alone does not establish GDPR compliance.
