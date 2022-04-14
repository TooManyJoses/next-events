import LogisticsItem from './logistics-item';
import { formatDisplayDate, formatAddress } from '../../utils/displayFormating';
import { DateIcon, AddressIcon } from '../icons';
import styles from './event-logistics.module.css';

function EventLogistics({ date, address, image, imageAlt }) {
  const displayDate = formatDisplayDate(date);
  const displayAddress = formatAddress(address);

  return (
    <section className={styles.logistics}>
      <div className={styles.image}>
        <img src={`/${image}`} alt={imageAlt} />
      </div>
      <ul className={styles.list}>
        <LogisticsItem icon={DateIcon}>
          <time>{displayDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={AddressIcon}>
          <address>{displayAddress}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
}

export default EventLogistics;
