import {
  EventSummary,
  EventLogistics,
  EventContent,
} from '../../components/event-detail';
import { getEventById, getAllEventIds } from '../../utils/getEvents';

function EventDetailPage({ eventDetails }) {
  if (!eventDetails) {
    return <p>No Event Found</p>;
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
  };
}

export async function getStaticPaths() {
  const ids = await getAllEventIds();

  const paths = ids.map((id) => ({ params: { eventId: id } }));
  return {
    paths,
    fallback: false,
  };
}
