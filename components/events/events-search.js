import { useRef } from 'react';
import Button from '../ui/button';
import { Months } from '../../utils/staticData';
import styles from './events-search.module.css';

function EventsSearch({ onSearch }) {
  const yearInputRef = useRef();
  const monthInputRef = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    const selectedYear = yearInputRef.current.value;
    const selectedMonth = monthInputRef.current.value;
    onSearch(selectedYear, selectedMonth);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.controls}>
        <div className={styles.control}>
          <label htmlFor="year">Year</label>
          <select id="year" ref={yearInputRef}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className={styles.control}>
          <label htmlFor="month">Month</label>
          <select id="month" ref={monthInputRef}>
            {Months.map((month, index) => (
              <option key={month} value={index + 1}>
                {month}
              </option>
            ))}
          </select>
        </div>
        <Button>Find Events</Button>
      </div>
    </form>
  );
}

export default EventsSearch;
