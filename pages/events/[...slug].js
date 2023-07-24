import { getFilteredEvents } from '../../data/dummy-data'
import { useRouter } from 'next/router'
import EventList from '../../components/events/EventList'
import ResultsTitle from '../../components/events/ResultsTitle'

const RemainingEvent = () => {
	const { slug: eventDate } = useRouter().query

	if (!Array.isArray(eventDate) || eventDate.length !== 2) {
		return <p className='center'> Loading ... </p>
	}

	const [year, month] = eventDate

	const isDateValid =
		isNaN(year) ||
		isNaN(month) ||
		year > 2030 ||
		year < 2021 ||
		month > 12 ||
		month < 1

	if (isDateValid) {
		return (
			<p className='center'> Invalid filter , please adjust your values ... </p>
		)
	}

	const filteredEvents = getFilteredEvents({ year, month })

	if (!filteredEvents.length) {
		return <p className='center'> No Events are found for chosen filter! </p>
	}

	return (
		<>
			<h1>Other Events</h1>
			<ResultsTitle date={new Date(year, month - 1)} />
			<EventList items={filteredEvents} />
		</>
	)
}

export default RemainingEvent
