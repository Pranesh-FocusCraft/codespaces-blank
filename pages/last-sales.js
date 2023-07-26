import { useEffect, useState } from 'react'

function LastSales() {
	const [data, setData] = useState()

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/todos/1')
			.then((res) => res.json())
			.then((data) => setData(data))
	}, [])

	if (!data) return <h1> Loading ... </h1>

	return (
		<>
			<div>User ID - {data.userId}</div>
			<div>ID - {data.id}</div>
			<div>Title - {data.title}</div>
			<div>Completed - {String(data.completed)}</div>
		</>
	)
}

export default LastSales
