export default function App() {
  return (
    <main className="shell">
      <header className="topbar">
        <a className="wordmark" href="/" aria-label="HelloDoc AI home">
          <span className="mark">H</span>
          <span>HelloDoc <span className="muted">/ AI Consultation</span></span>
        </a>
        <span className="status"><span className="status-dot" /> Prototype workspace</span>
      </header>

      <section className="intro">
        <p className="eyebrow">CONSULTATION WORKSPACE</p>
        <h1>Clinical conversations,<br />structured with care.</h1>
        <p className="description">
          A workspace for video consultations, live transcription, and
          clinician-reviewed clinical documentation.
        </p>
      </section>

      <section className="notice" aria-label="Prototype status">
        <strong>Early development</strong>
        <p>
          Video, transcription, and AI extraction are not connected yet.
          This prototype is not for real patient consultations.
        </p>
      </section>

      <footer>HELLODOC AI CONSULTATION <span>·</span> RESEARCH PROTOTYPE</footer>
    </main>
  );
}
