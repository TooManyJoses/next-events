import EventList from '../components/events/event-list';
import { getFeaturedEvents } from '../utils/getEvents';

function HomePage({ featuredEvents }) {
  return (
    <div>
      <EventList events={featuredEvents} />
    </div>
  );
}

export default HomePage;

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      featuredEvents,
    },
    revalidate: 1800,
  };
}