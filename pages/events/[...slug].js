import { getFilteredEvents } from '../../data/dummy-data'
import { useRouter } from 'next/router'
import { EventList, ResultsTitle } from '../../components/events'
import { Button, ErrorAlert } from '../../components/ui'

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

	const renderInvalid = (text) => (
		<>
			<ErrorAlert>
				<p> {text} </p>
			</ErrorAlert>
			<div className='center'>
				<Button link='/events'> Show All Events </Button>
			</div>
		</>
	)

	if (isDateValid) {
		return renderInvalid('Invalid filter , please adjust your values ...')
	}

	const filteredEvents = getFilteredEvents({ year, month })
	if (!filteredEvents.length) {
		return renderInvalid('No Events are found for chosen filter! ')
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
