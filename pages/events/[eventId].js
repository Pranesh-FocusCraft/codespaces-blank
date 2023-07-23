import { useRouter } from 'next/router'
import { getEventById } from '../../data/dummy-data'
import {
	EventContent,
	EventLogistics,
	EventSummary,
	LogisticsItem,
} from '../../components/event-detail'

const EventId = () => {
	const router = useRouter()

	const eventData = getEventById(router.query.eventId)

	if (!eventData) return <h1>No Event found!</h1>

	const { title, date, location, image, description } = eventData

	return (
		<>
			<EventSummary title={title} />
			<EventLogistics
				date={date}
				address={location}
				image={image}
				imageAlt={title}
			/>
			<EventContent>
				<p> {description} </p>
			</EventContent>
		</>
	)
}

export default EventId
