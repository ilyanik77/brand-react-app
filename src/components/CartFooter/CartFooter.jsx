import './cartFooter.scss'
import priceFormatter from './../../utils/priceFormatter'

const CartFooter = ({ total }) => {

    const { count, price } = total

	return (
		<div className='cart-footer'>
			<div className='cart-footer__count'>Quantity: {count} </div>
			<div className='cart-footer__price'>
				{/* {priceFormatter.format(price)} руб. */}
				SUB TOTAL: {priceFormatter.format(price)}$
			</div>
			<a href='/#'>PROCEED TO CHECKOUT</a>
		</div>
	)
}
 
export default CartFooter;