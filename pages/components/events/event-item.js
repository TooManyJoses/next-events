import Link from 'next/link';
import {
  formatDisplayDate,
  formatAddress,
} from '../../../utils/displayFormating';

function EventItem({ title, image, date, location, id }) {
  const displayDate = formatDisplayDate(date);
  const displayAddress = formatAddress(location);

  return (
    <li>
      <img src={`/${image}`} alt={title} width={300} height={300} />
      <div>
        <div>
          <h2>{title}</h2>
          <div>
            <time>{displayDate}</time>
          </div>
          <div>
            <address>{displayAddress}</address>
          </div>
        </div>
        <div>
          <Link href={`/events/${id}`}>Explore Event</Link>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
