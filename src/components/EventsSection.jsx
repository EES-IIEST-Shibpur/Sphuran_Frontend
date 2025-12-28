import { events } from "../data/events";
import EventCard from "./EventCard";

export default function EventsSection() {
  return (
    <section className="events">
      <h2>Events</h2>
      <div className="events-grid">
        {events.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </div>
    </section>
  );
}
