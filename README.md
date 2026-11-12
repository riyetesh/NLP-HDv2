# HelloDoc AI Consultation

An experimental, AI-assisted telemedicine consultation workspace. The project is being developed as a standalone module before any integration with HelloDoc.

The intended workflow combines a patient–doctor video consultation, live speech transcription, structured extraction of clinically relevant information, and a doctor-reviewed consultation form.

> **Research prototype only.** This software is not a medical device and must not be used to make or recommend clinical decisions. AI-generated content is unverified until reviewed and explicitly approved by a qualified clinician. Use synthetic data during development.

## Planned capabilities

- Patient and doctor video/audio sessions
- Live, timestamped transcription
- Speaker-aware conversation processing
- Extraction into a predefined clinical schema
- Field-level evidence, uncertainty, and confidence indicators
- Doctor review, correction, and explicit approval
- Auditable separation between AI suggestions and approved records

## Architecture (initial direction)

| Layer | Planned technology |
|---|---|
| Web client | React, TypeScript, Vite |
| Real-time media | WebRTC, initially via a managed media/signalling provider |
| API | Python, FastAPI |
| Speech recognition | Streaming speech-to-text provider behind an adapter |
| Clinical NLP | Structured extraction pipeline with validation and evidence tracking |
| Persistence | PostgreSQL / Supabase, after data model and privacy review |

Provider choices are intentionally isolated behind service interfaces so they can be evaluated and replaced.

## Repository layout

```
backend/
  app/
    main.py
frontend/
  src/
docs/
.env.example
```

## Local development

### Backend

Requires Python 3.11 or newer.

```bash
cd backend
python -m venv .venv
# Windows: .venv\\Scripts\\activate
# macOS/Linux: source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

The API health endpoint is available at `http://localhost:8000/health`; interactive API documentation is at `http://localhost:8000/docs`.

### Frontend

Requires Node.js 20 or newer.

```bash
cd frontend
npm install
npm run dev
```

## Development principles

1. Preserve the original speaker, timestamp, and source evidence for extracted statements.
2. Distinguish an explicit denial from a symptom that was never discussed.
3. Never interpret missing information as a negative finding. For example, an unmentioned allergy is **unknown**, not "no known allergies".
4. Treat confidence as evidence strength for the extraction, not proof that a patient's statement is medically true.
5. Never let AI output silently overwrite clinician edits.
6. Require clinician review and explicit approval before exporting or saving a final clinical record.
7. Keep raw audio retention to the minimum necessary; document consent, access, retention, and deletion before handling real patient data.

## Project status

Early scaffold. Video calling, transcription, extraction, persistence, authentication, and clinical workflows are not implemented yet. See [the roadmap](docs/roadmap.md) and [architecture notes](docs/architecture.md).

## License

Not yet selected. No license currently grants permission to reuse or redistribute this code.
