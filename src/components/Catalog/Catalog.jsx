import { useState } from 'react'
import data from '../../data.js'
import ProductCard from '../ProductCard/ProductCard.jsx'
//import ProductItem from '../ProductItem/ProductItem.jsx'
//import ProductAdd from '../ProductAdd/ProductAdd.jsx'
import Pagination from '../Pagination/Pagination.jsx'
import './catalog.scss'

const Catalog = () => {
	const [products, setProducts] = useState(data.products)

	const catalog = products.map(product => {
		return (
			<>
				<ProductCard
					product={product}
					key={product.id}
					// deleteProduct={deleteProduct}
					// increase={increase}
					// decrease={decrease}
					// changeValue={changeValue}
				/>
				
				{/* <ProductAdd /> */}
			</>
		)
	})

	return (
		<section className='catalog'>
			<div className='catalog__content container'>
				<div className='catalog__content__box'>{catalog}</div>
				<Pagination />
			</div>
		</section>
	)
}

export default Catalog
