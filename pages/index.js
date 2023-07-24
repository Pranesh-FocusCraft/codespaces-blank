import fs from 'fs/promises'
import path from 'path'

function HomePage({ products }) {
	return (
		<ul>
			{products.map((a) => (
				<li key={a.id}>
					<div>id - {a.id} </div>
					<div>title - {a.title}</div>
				</li>
			))}
		</ul>
	)
}

export async function getStaticProps() {
	const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json')
	const jsonData = await fs.readFile(filePath)
	const { products } = JSON.parse(jsonData)

	return { props: { products } }
}

export default HomePage
