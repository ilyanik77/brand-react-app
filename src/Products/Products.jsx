import './products.scss'
import data from './../data.js'
import { useState } from 'react'

import ProductCard from '../components/ProductCard/ProductCard.jsx'

const Products = () => {
	const [products, setProducts] = useState(data)

	const productsList = products.map(product => {
		return (
			<ProductCard
				product={product}
				key={product.id}
				// deleteProduct={deleteProduct}
				// increase={increase}
				// decrease={decrease}
				// changeValue={changeValue}
			/>
		)
	})

	return (
		<section className='products'>
			<div className='products__content container'>
				<div className='products__content__text'>
					<h2>Fetured Items</h2>
					<p>Shop for items based on what we featured in this week</p>
				</div>
                
				<div className='products__content__box'>
                    {productsList}
                </div>

				<div className='button__box'>
					<a className='button__link' href='catalog.html'>
						Browse All Product
					</a>
				</div>
			</div>
		</section>
	)
}

export default Products
