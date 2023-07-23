import { useRouter } from 'next/router'
import { getEventById } from '../../data/dummy-data'

const EventId = () => {
	const router = useRouter()

	const eventData = getEventById(router.query.eventId)

	if (!eventData) return <h1>No Event found!</h1>

	return (
		<div>
			<h1>Events with {router.query.eventId}</h1>
		</div>
	)
}

export default EventId
