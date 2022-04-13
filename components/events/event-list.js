import EventItem from './event-item';
import styles from './event-list.module.css';

function EventList({ events }) {
  return (
    <ul className={styles.list}>
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
