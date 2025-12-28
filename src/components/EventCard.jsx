export default function EventCard({ event }) {
  return (
    <div className="event-card">
      <h3>{event.title}</h3>
      <p>{event.subtitle}</p>
      <span className="tag">{event.category}</span>
    </div>
  );
}
