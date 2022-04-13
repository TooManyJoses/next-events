import { formatDisplayDate, formatAddress } from '../../utils/displayFormating';
import Button from '../ui/button';
import { DateIcon, ArrowRightIcon, AddressIcon } from '../icons';
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
            <DateIcon />
            <time>{displayDate}</time>
          </div>
          <div className={styles.address}>
            <AddressIcon />
            <address>{displayAddress}</address>
          </div>
        </div>
        <div className={styles.actions}>
          <Button link={`/events/${id}`}>
            <span>
              Explore Event
              <span className={styles.icon}>
                <ArrowRightIcon />
              </span>
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
