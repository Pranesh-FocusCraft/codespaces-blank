import EventItem from './EventItem'

const EventList = ({ items }) => {
	return (
		<div>
			<ul>
				{items.map((a) => (
					<EventItem data={a} key={a.id} />
				))}
			</ul>
		</div>
	)
}

export default EventList
