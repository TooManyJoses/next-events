import Link from 'next/link';
import {
  formatDisplayDate,
  formatAddress,
} from '../../../utils/displayFormating';
import styles from './event-item.module.css';

function EventItem({ title, image, date, location, id }) {
  const displayDate = formatDisplayDate(date);
  const displayAddress = formatAddress(location);

  return (
    <li className={styles.item}>
      <img src={`/${image}`} alt={title} />
      <div className={styles.content}>
        <div className={styles.summary}>
          <h2>{title}</h2>
          <div className={styles.date}>
            <time>{displayDate}</time>
          </div>
          <div className={styles.address}>
            <address>{displayAddress}</address>
          </div>
        </div>
        <div className={styles.actions}>
          <Link href={`/events/${id}`}>Explore Event</Link>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
