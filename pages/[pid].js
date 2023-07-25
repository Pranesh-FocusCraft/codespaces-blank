import fs from 'fs/promises'
import path from 'path'

function ProductDetailPage({ loadedProduct: { title, description } }) {
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

	if (!product) {
		return { notFound: true }
	}

	return { props: { loadedProduct: product } }
}

export default ProductDetailPage
