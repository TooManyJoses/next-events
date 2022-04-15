import { useRouter } from 'next/router';
import EventList from '../../components/events/event-list';
import EventsSearch from '../../components/events/events-search';
import { getAllEvents } from '../../utils/getEvents';

function AllEventsPage() {
  const allEvents = getAllEvents();
  const router = useRouter();

  function findEventshandler(year, month) {
    router.push(`/events/${year}/${month}`);
  }

  return (
    <div>
      <EventsSearch onSearch={findEventshandler} />
      <EventList events={allEvents} />
    </div>
  );
}

export default AllEventsPage;
