import { useRouter } from 'next/router'
import EventList from '../../components/events/EventList'
import EventsSearch from '../../components/events/EventsSearch'
import { getAllEvents } from '../../data/dummy-data'

const Event = () => {
	const router = useRouter()

	const data = getAllEvents()

	const handleSelect = (year, month) => {
		router.push(`/events/${year}/${month}`)
	}

	return (
		<>
			<h1>All Event</h1>
			<EventsSearch onSelect={handleSelect} />
			<EventList items={data} />
		</>
	)
}

export default Event
