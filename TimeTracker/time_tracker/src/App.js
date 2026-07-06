import './App.css';
import Stopwatch from './components/Stopwatch';
import SessionList from './components/SessionList';
import StatsBar from './components/StatsBar';
import useLocalStorage from './hooks/useLocalStorage';

function App() {
  const [sessions, setSessions] = useLocalStorage('chrono.sessions', []);

  const addSession = ({ label, notes, durationMs }) => {
    const session = {
      id:
        typeof crypto !== 'undefined' && crypto.randomUUID
          ? crypto.randomUUID()
          : String(Date.now() + Math.random()),
      label,
      notes,
      durationMs,
      createdAt: new Date().toISOString(),
    };
    setSessions((prev) => [session, ...prev]);
  };

  const deleteSession = (id) =>
    setSessions((prev) => prev.filter((s) => s.id !== id));

  const clearSessions = () => setSessions([]);

  return (
    <div className="app">
      <header className="app-header">
        <div className="brand">
          <span className="brand-mark" aria-hidden="true">⏱</span>
          <div>
            <h1>Chrono</h1>
            <p className="tagline">Track your time. Keep your notes. Stay in flow.</p>
          </div>
        </div>
      </header>

      <main className="app-main">
        <Stopwatch onLog={addSession} />
        <div className="app-side">
          <StatsBar sessions={sessions} />
          <SessionList
            sessions={sessions}
            onDelete={deleteSession}
            onClear={clearSessions}
          />
        </div>
      </main>

      <footer className="app-footer">
        <span>Data is saved locally in your browser.</span>
      </footer>
    </div>
  );
}

export default App;
