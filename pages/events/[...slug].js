import { Fragment, useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { getFilteredEvents } from '../../helpers/api-util'
import EventList from '../../components/events/event-list'
import ResultsTitle from '../../components/events/results-title'
import Button from '../../components/ui/button'
import ErrorAlert from '../../components/ui/error-alert'

const RenderFail = ({ text }) => (
	<>
		<ErrorAlert>
			<p>{text}</p>
		</ErrorAlert>
		<div className='center'>
			<Button link='/events'>Show All Events</Button>
		</div>
	</>
)

function FilteredEventsPage() {
	const router = useRouter()
	const filterData = router.query.slug

	const [year, month] = filterData.map((a) => +a)

	const isDateNotValid =
		isNaN(year) ||
		isNaN(month) ||
		year > 2030 ||
		year < 2021 ||
		month < 1 ||
		month > 12

	if (isDateNotValid) {
		return <RenderFail text='Invalid filter. Please adjust your values!' />
	}

	const [filteredEvents, setfilteredEvents] = useState()

	const getData = useCallback(async () => {
		const newFilteredEvents = await getFilteredEvents({ year, month })
		setfilteredEvents(newFilteredEvents)
	}, [getFilteredEvents])

	useEffect(() => {
		if (!filteredEvents?.length) getData()
	}, [getData])

	if (!filteredEvents) return <p className='center'> Loading... </p>

	if (!filteredEvents.length) {
		return <RenderFail text='No events found for the chosen filter!' />
	}

	const date = new Date(year, month - 1)

	return (
		<>
			<ResultsTitle date={date} />
			<EventList items={filteredEvents} />
		</>
	)
}

export default FilteredEventsPage
