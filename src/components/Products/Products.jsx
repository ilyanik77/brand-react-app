import './products.scss'
import data from '../../data.js'
import { useState } from 'react'

import { Link } from 'react-router-dom'

import ProductCard from '../ProductCard/ProductCard.jsx'

const Products = () => {
	const [products] = useState(data.products)
    const [count] = useState(data.countProductsOnHomePage)

	const productsList = products
		.slice(0, count)
		.map(product => {
			return (
				<ProductCard
					product={product}
					key={product.id}
					
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

				<div className='products__content__box'>{productsList}</div>

				<div className='button__box'>
					<Link to='/catalog'>
						<a className='button__link' href='catalog.html'>
							Browse All Product
						</a>
					</Link>
				</div>
			</div>
		</section>
	)
}

export default Products
