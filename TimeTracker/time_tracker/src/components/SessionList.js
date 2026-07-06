import { formatDateTime, formatDuration } from '../utils/time';

export default function SessionList({ sessions, onDelete, onClear }) {
  if (sessions.length === 0) {
    return (
      <section className="card empty" aria-label="Logged sessions">
        <div className="empty-icon" aria-hidden="true">⏱️</div>
        <p className="empty-title">No sessions logged yet</p>
        <p className="empty-sub">
          Start the stopwatch and hit <strong>Log session</strong> to track your time.
        </p>
      </section>
    );
  }

  return (
    <section className="card sessions" aria-label="Logged sessions">
      <header className="sessions-head">
        <h2>Logged sessions</h2>
        <button type="button" className="btn btn-ghost small" onClick={onClear}>
          Clear all
        </button>
      </header>
      <ul className="session-list">
        {sessions.map((s) => (
          <li key={s.id} className="session-item">
            <div className="session-main">
              <span className="session-label">{s.label}</span>
              {s.notes && <span className="session-notes">{s.notes}</span>}
              <span className="session-date">{formatDateTime(s.createdAt)}</span>
            </div>
            <div className="session-right">
              <code className="session-duration">{formatDuration(s.durationMs)}</code>
              <button
                type="button"
                className="icon-btn"
                aria-label={`Delete session ${s.label}`}
                onClick={() => onDelete(s.id)}
              >
                ✕
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
