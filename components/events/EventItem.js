import Link from 'next/link'
import classes from './EventItem.module.css'

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
		<li className={classes.item}>
			<img src={'/' + image} alt={title} />
			<div className={classes.content}>
				<div className={classes.summary}>
					<h2> TITLE - {title} </h2>
					<div className={classes.date}>
						<time> Date - {readableDate} </time>
					</div>
					<div className={classes.address}>
						<address> ADDRESS - {address} </address>
					</div>
				</div>
				<div className={classes.actions}>
					<Link href={exploreLink}>Explore Events</Link>
				</div>
			</div>
		</li>
	)
}

export default EventItem
