import './productItem.scss'

const ProductItem = ({ product }) => {

    const { img, title, description, price } = product

	return (
		<div>
			<img src={`./../img/${img}`} alt='product' />
			<div className='product__content'>
				<h3 className='product__title'>{title}</h3>
				<p className='product__text'>{description}</p>
				<p className='product__price'>${price}</p>
			</div>
		</div>
	)
}

export default ProductItem
