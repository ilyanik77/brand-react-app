import { Link } from 'react-router-dom'
//import ProductItem from '../ProductItem/ProductItem'
import './productCard.scss'

const ProductCard = ({ product }) => {
	const { img, title, description, price, id } = product

	return (
		<div className='product__item'>
			
			<img src={`./../img/${img}`} alt='product' />
			<div className='product__content'>
				<h3 className='product__title'>{title}</h3>
				<p className='product__text'>{description}</p>
				<div className='product__box'>
					<p className='product__price'>${price}</p>
					<Link
						to={`/product/:${id}`}
						className='product__btn'
						onClick={() => console.log(product.id)}
					>
						More detailed...
					</Link>
				</div>
			</div>
		</div>
	)
}

export default ProductCard
