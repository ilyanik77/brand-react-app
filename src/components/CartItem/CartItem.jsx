import { MdDeleteForever } from 'react-icons/md'
import Count from '../Count/Count'
import './cartItem.scss'

const CartItem = ({
	product,
	deleteProduct,
	increase,
	decrease,
	changeValue,
}) => {
	const { img, title, price, count, id } = product

	return (
		<div className='cart__item'>
			<img
				width='262px'
				// src={'./../../img/' + props.product.img}
				src={`./../../img/${img}`}
				alt='{props.product.title}'
			/>
			<div className='cart__info'>
				<h3 className='cart__title'>{title}</h3>
				<p className='cart__text'>
					Price: <span>{price}$</span>
				</p>
				<p className='cart__text'>Color: Red</p>
				<p className='cart__text'>Size: Xl</p>
				<div className='cart__count'>
					<p className='cart__text'>Quantity:</p>
					<Count
						count={count}
						id={id}
						increase={increase}
						decrease={decrease}
						changeValue={changeValue}
					/>
				</div>
			</div>
			<MdDeleteForever
				className='delete'
                onClick={()=>{deleteProduct(id)}}
				deleteProduct={deleteProduct}
				// id={id}
			/>
		</div>
	)
}

export default CartItem
