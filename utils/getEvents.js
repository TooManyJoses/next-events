import { EVENTS } from '../mock-data';

export function getFeaturedEvents() {
  return EVENTS.filter((event) => event.isFeatured);
}

export function getAllEvents() {
  return EVENTS;
}

export function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;

  let filteredEvents = EVENTS.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}

export function getEventById(id) {
  return EVENTS.find((event) => event.id === id);
}
