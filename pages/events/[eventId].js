import {
  EventSummary,
  EventLogistics,
  EventContent,
} from '../../components/event-detail';
import ErrorAlert from '../../components/ui/error-alert';
import { getEventById, getFeaturedEventIds } from '../../utils/getEvents';

function EventDetailPage({ eventDetails }) {
  if (!eventDetails) {
    return (
      <ErrorAlert>
        <p>No Event Found</p>
      </ErrorAlert>
    );
  }
  const { title, date, location, description, image } = eventDetails;
  return (
    <>
      <EventSummary title={title} />
      <EventLogistics
        date={date}
        address={location}
        image={image}
        imageAlt={title}
      />
      <EventContent>
        <p>{description}</p>
      </EventContent>
    </>
  );
}

export default EventDetailPage;

export async function getStaticProps(context) {
  const eventId = context.params.eventId;
  const event = await getEventById(eventId);

  return {
    props: {
      eventDetails: event,
    },
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  const ids = await getFeaturedEventIds();

  const paths = ids.map((id) => ({ params: { eventId: id } }));
  return {
    paths,
    fallback: 'blocking',
  };
}
