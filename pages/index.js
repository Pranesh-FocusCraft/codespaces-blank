import { getFeaturedEvents } from '../data/dummy-data'
import EventList from '../components/events/EventList'

const HomePage = () => {
	const featuredEvents = getFeaturedEvents()

	return (
		<div>
			<h1>Home page</h1>
			<div>
				<EventList items={featuredEvents} />
			</div>
		</div>
	)
}

export default HomePage
