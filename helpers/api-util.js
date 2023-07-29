export async function getAllEvents() {
	const data = await fetch(
		'https://nextjs-learn-1cb1b-default-rtdb.firebaseio.com/events.json'
	).then((a) => a.json())

	return Object.entries(data).map(([key, value]) => ({ id: key, ...value }))
}

export async function getFeaturedEvents() {
	const events = await getAllEvents()
	return events.filter(({ isFeatured }) => isFeatured)
}

export async function getEventById(id) {
	const events = await getAllEvents()
	return events.find((a) => a.id === id)
}
