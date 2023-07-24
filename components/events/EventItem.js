import AddressIcon from '../icons/address-icon'
import ArrowRightIcon from '../icons/arrow-right-icon'
import DateIcon from '../icons/date-icon'
import Button from '../ui/Button'
import classes from './EventItem.module.css'

const EventItem = ({ data: { title, image, id, location, date } }) => {
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
						<DateIcon />
						<time> Date - {readableDate} </time>
					</div>
					<div className={classes.address}>
						<AddressIcon />
						<address> ADDRESS - {address} </address>
					</div>
				</div>
				<div className={classes.actions}>
					<Button link={exploreLink}>
						<span>Explore Event</span>
						<span className={classes.icon}>
							<ArrowRightIcon />
						</span>
					</Button>
				</div>
			</div>
		</li>
	)
}

export default EventItem
