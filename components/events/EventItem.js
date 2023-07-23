import Link from 'next/link'

const EventItem = ({ data }) => {
	console.log(data)

	const { title, image, id, location, date } = data

	const readableDate = new Date(date).toLocaleDateString('en-US', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	})

	const address = location.replace(', ', '\n')

	const exploreLink = `events/${id}`

	return (
		<li>
			{/* <img src={'/' + image} alt={title} /> */}
			<h2> TITLE - {title} </h2>
			<time> Date - {readableDate} </time>
			<address> ADDRESS - {address} </address>
			<Link href={exploreLink}>Explore Events</Link>
		</li>
	)
}

export default EventItem
