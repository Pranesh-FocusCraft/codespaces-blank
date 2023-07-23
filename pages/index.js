import { useRouter } from 'next/router'
import EventList from '../components/events/EventList'
import EventsSearch from '../components/events/EventsSearch'
import { getFeaturedEvents } from '../data/dummy-data'

const HomePage = () => {
	const router = useRouter()
	const featuredEvents = getFeaturedEvents()

	const handleSelect = (year, month) => {
		router.push(`/events/${year}/${month}`)
	}

	return (
		<>
			<h1>Featured Events</h1>
			<div>
				<EventsSearch onSelect={handleSelect} />
				<EventList items={featuredEvents} />
			</div>
		</>
	)
}

export default HomePage
