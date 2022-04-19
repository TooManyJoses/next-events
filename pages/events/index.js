import { useRouter } from 'next/router';
import EventList from '../../components/events/event-list';
import EventsSearch from '../../components/events/events-search';
import { getAllEvents } from '../../utils/getEvents';

function AllEventsPage({ allEvents }) {
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

export async function getStaticProps() {
  const allEvents = await getAllEvents();

  return {
    props: {
      allEvents,
    },
    revalidate: 1800,
  };
}