import { formatDuration } from '../utils/time';

export default function StatsBar({ sessions }) {
  const totalMs = sessions.reduce((sum, s) => sum + s.durationMs, 0);
  const count = sessions.length;
  const avgMs = count ? totalMs / count : 0;

  const stats = [
    { label: 'Total tracked', value: formatDuration(totalMs) },
    { label: 'Sessions', value: String(count) },
    { label: 'Average', value: formatDuration(avgMs) },
  ];

  return (
    <section className="stats" aria-label="Summary statistics">
      {stats.map((s) => (
        <div key={s.label} className="stat card">
          <span className="stat-value">{s.value}</span>
          <span className="stat-label">{s.label}</span>
        </div>
      ))}
    </section>
  );
}
