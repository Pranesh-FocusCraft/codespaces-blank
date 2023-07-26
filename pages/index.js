import fs from 'fs/promises'
import Link from 'next/link'
import path from 'path'

function HomePage({ products }) {
	return (
		<ul>
			{products.map(({ id, title }) => (
				<li key={id}>
					<Link href={`/${id}`}> {title} </Link>
				</li>
			))}
		</ul>
	)
}

export async function getStaticProps(context) {
	// console.log('data - fetch')
	const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json')
	const jsonData = await fs.readFile(filePath)
	const { products } = JSON.parse(jsonData)

	if (!products.length) {
		return {
			notFound: true,
			redirect: {
				// path if u want to redirect to another page
				destination: '/no-data-path',
			},
		}
	}

	return {
		props: { products },
		revalidate: 10,
	}
}

export default HomePage
