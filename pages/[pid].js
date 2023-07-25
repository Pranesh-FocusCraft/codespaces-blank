import fs from 'fs/promises'
import path from 'path'

function ProductDetailPage({ loadedProduct }) {
	const { title, description } = loadedProduct
	return (
		<>
			<h1> Title - {title} </h1>
			<p> Description - {description} </p>
		</>
	)
}

async function getData() {
	const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json')
	const jsonData = await fs.readFile(filePath)
	const { products } = JSON.parse(jsonData)
	return products
}

export async function getStaticProps({ params }) {
	const productId = params.pid
	const products = await getData()
	const product = products.find((a) => a.id === productId)
	return product ? { props: { loadedProduct: product } } : { notFound: true }
}

export async function getStaticPaths() {
	const products = await getData()
	const pathWithParam = products.map(({ id }) => ({ params: { pid: id } }))
	return { paths: pathWithParam, fallback: false }
}

export default ProductDetailPage
