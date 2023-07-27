import useSWT from 'swr'

function LastSales() {
	const { data, error, isLoading } = useSWT(
		'https://jsonplaceholder.typicode.com/todos/1',
		(url) => fetch(url).then((res) => res.json())
	)

	if (error) return <h1> Failed to load </h1>
	if (isLoading) return <h1> Loading ... </h1>

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
