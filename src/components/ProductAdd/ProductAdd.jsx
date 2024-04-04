import { PiShoppingCart } from 'react-icons/pi'
import './productAdd.scss'

const ProductAdd = () => {
	return (
		<div className='product__card-add'>
			<a className='card-add__link' href='/#'>
				
				<PiShoppingCart className='icon' />

				<p>Add to Cart</p>
			</a>
		</div>
	)
}

export default ProductAdd
