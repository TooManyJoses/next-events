import { useRouter } from 'next/router';
import {
  EventSummary,
  EventLogistics,
  EventContent,
} from '../../components/event-detail';
import { getEventById } from '../../utils/getEvents';

function EventDetailPage() {
  const router = useRouter();
  const eventId = router.query.eventId;
  const eventDetails = getEventById(eventId);

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
