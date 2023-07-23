import EventItem from './EventItem'
import classes from './EventList.module.css'

const EventList = ({ items }) => {
	return (
		<ul className={classes.list}>
			{items.map((a) => (
				<EventItem data={a} key={a.id} />
			))}
		</ul>
	)
}

export default EventList
