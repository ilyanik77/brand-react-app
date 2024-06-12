import './products.scss'
import ProductCard from '../ProductCard/ProductCard.jsx'

import { useSelector } from 'react-redux'

import { Link } from 'react-router-dom'



const Products = () => {

    const products = useSelector(state => state.products.products)
    const count = useSelector(
			state => state.products.countProductsOnHomePage
		);

	const productsList = products.slice(0, count).map(product => {
		return <ProductCard product={product} key={product.id} />
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
