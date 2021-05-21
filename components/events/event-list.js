import EventItem from './event-item';
import classes from './event-list.module.css';

function EventList({ items }) {
  return (
    <ul className={classes.items}>
      {items.map((event) => (
        <EventItem key={event.id} {...event} />
      ))}
    </ul>
  );
}

export default EventList;
