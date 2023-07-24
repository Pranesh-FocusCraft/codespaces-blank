import { useRouter } from 'next/router'
import {
	EventContent,
	EventLogistics,
	EventSummary,
} from '../../components/event-detail'
import { getEventById } from '../../data/dummy-data'
import { ErrorAlert } from '../../components/ui'

const EventId = () => {
	const router = useRouter()

	const eventData = getEventById(router.query.eventId)

	if (!eventData)
		return (
			<ErrorAlert>
				<h1>No Event found!</h1>
			</ErrorAlert>
		)

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
