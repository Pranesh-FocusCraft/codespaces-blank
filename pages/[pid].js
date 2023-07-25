import fs from 'fs/promises'
import path from 'path'

function ProductDetailPage({ loadedProduct }) {
	if (!loadedProduct) return <p> Loading ... </p>

	const { title, description } = loadedProduct
	return (
		<>
			<h1> Title - {title} </h1>
			<p> Description - {description} </p>
		</>
	)
}

export async function getStaticProps({ params }) {
	const productId = params.pid

	const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json')
	const jsonData = await fs.readFile(filePath)
	const { products } = JSON.parse(jsonData)

	const product = products.find((a) => a.id === productId)

	return product ? { props: { loadedProduct: product } } : { notFound: true }
}

export async function getStaticPaths() {
	return {
		paths: [
			{ params: { pid: 'p1' } },
			// { params: { pid: 'p2' } },
			// { params: { pid: 'p3' } },
		],
		fallback: true,
	}
}

export default ProductDetailPage
