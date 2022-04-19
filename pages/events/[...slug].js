import { useRouter } from 'next/router';
import EventList from '../../components/events/event-list';
import ResultsTitle from '../../components/events/results-title';
import { getFilteredEvents } from '../../utils/getEvents';
import Button from '../../components/ui/button';
import ErrorAlert from '../../components/ui/error-alert';

function FilteredEventsDetailPage({ filteredEvents, filteredDate, hasError }) {
  if (hasError) {
    return (
      <>
        <ErrorAlert>
          <p>Invalid values.</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events </Button>
        </div>
      </>
    );
  }

  const date = new Date(filteredDate.year, filteredDate.month - 1);
  return (
    <div>
      {!filteredEvents || filteredEvents.length === 0 ? (
        <>
          <ErrorAlert>
            <p>No events found for chosen month and year</p>
          </ErrorAlert>
          <div className="center">
            <Button link="/events">Show All Events </Button>
          </div>
        </>
      ) : (
        <>
          <ResultsTitle date={date} />
          <EventList events={filteredEvents} />
        </>
      )}
    </div>
  );
}

export default FilteredEventsDetailPage;

export async function getServerSideProps({ params }) {
  const filteredData = params.slug;

  const filteredYear = Number(filteredData[0]);
  const filteredMonth = Number(filteredData[1]);

  if (
    isNaN(filteredYear) ||
    isNaN(filteredMonth) ||
    filteredMonth < 1 ||
    filteredMonth > 12
  ) {
    return {
      props: { hasError: true },
    };
  }

  const filteredEvents = await getFilteredEvents({
    year: filteredYear,
    month: filteredMonth,
  });

  return {
    props: {
      filteredEvents,
      filteredDate: { year: filteredYear, month: filteredMonth },
    },
  };
}
