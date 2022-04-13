import EventItem from './event-item';

function EventList({ events }) {
  return (
    <ul>
      {events.map((event) => (
        <EventItem
          key={event.id}
          id={event.id}
          image={event.image}
          date={event.date}
          location={event.location}
          title={event.title}
        />
      ))}
    </ul>
  );
}

export default EventList;
