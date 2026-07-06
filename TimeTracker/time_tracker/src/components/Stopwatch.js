import { useEffect, useRef, useState } from 'react';
import { formatClock } from '../utils/time';

export default function Stopwatch({ onLog }) {
  const [elapsed, setElapsed] = useState(0);
  const [running, setRunning] = useState(false);
  const [label, setLabel] = useState('');
  const [notes, setNotes] = useState('');
  const startRef = useRef(0);
  const rafRef = useRef(null);

  useEffect(() => {
    if (!running) return undefined;
    startRef.current = Date.now() - elapsed;
    const tick = () => {
      setElapsed(Date.now() - startRef.current);
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [running]);

  const toggle = () => setRunning((r) => !r);

  const reset = () => {
    setRunning(false);
    setElapsed(0);
  };

  const handleLog = () => {
    if (elapsed <= 0) return;
    onLog({
      label: label.trim() || 'Untitled session',
      notes: notes.trim(),
      durationMs: elapsed,
    });
    setRunning(false);
    setElapsed(0);
    setLabel('');
    setNotes('');
  };

  return (
    <section className="stopwatch card" aria-label="Stopwatch">
      <div className={`clock ${running ? 'is-running' : ''}`} aria-live="off">
        <code>{formatClock(elapsed)}</code>
        <span className={`pulse ${running ? 'on' : ''}`} aria-hidden="true" />
      </div>

      <div className="field-group">
        <input
          className="text-input"
          type="text"
          placeholder="What are you working on?"
          aria-label="Task name"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
        />
        <textarea
          className="text-input notes"
          placeholder="Notes about this session…"
          aria-label="Session notes"
          rows={2}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </div>

      <div className="controls">
        <button
          type="button"
          className={`btn ${running ? 'btn-warn' : 'btn-primary'}`}
          onClick={toggle}
        >
          {running ? 'Pause' : elapsed > 0 ? 'Resume' : 'Start'}
        </button>
        <button
          type="button"
          className="btn btn-ghost"
          onClick={reset}
          disabled={elapsed === 0}
        >
          Reset
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={handleLog}
          disabled={elapsed === 0}
        >
          Log session
        </button>
      </div>
    </section>
  );
}
