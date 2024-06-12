import { MdDeleteForever } from 'react-icons/md'
import Count from '../Count/Count'
import './cartItem.scss'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProductFromCart } from '../../Redux/cartSlice'

const CartItem = ({
	product,
	changeValue,
}) => {
	const { img, title, price, count, id } = product
    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart.cart)

    const increase = id => {
			return cart.map(product => {
				if (product.id === id) {
					return {
						...product,
						count: ++product.count,
						priceTotal: product.count * product.price,
					}
				}
				return product
			})
		}

	return (
		<div className='cart__item'>
			<img
				width='262px'
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
						//decrease={decrease}
						changeValue={changeValue}
					/>
				</div>
			</div>
			<MdDeleteForever
				className='delete'
                onClick={()=>{dispatch(deleteProductFromCart(id))}}
				//deleteProduct={deleteProduct}
				id={id}
			/>
		</div>
	)
}

export default CartItem
