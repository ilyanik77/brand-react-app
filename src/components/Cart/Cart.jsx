import CartItem from '../CartItem/CartItem.jsx'
import './cart.scss'

import { useSelector, useDispatch } from 'react-redux'
import { clearCart } from './../../Redux/cartSlice'

import { Link } from 'react-router-dom'
import FormCard from '../FormCard/FormCard.jsx'

const Cart = () => {

    const cart = useSelector(state => state.cart.cart)
	const dispatch = useDispatch()
    console.log(cart);


	// const [cart, setCart] = useState(data.cart)
	// const [total, setTotal] = useState({
	// 	price: cart.reduce((prev, curr) => prev + curr.priceTotal, 0),
	// 	count: cart.reduce((prev, curr) => prev + curr.count, 0),
	// })

	// useEffect(() => {
	// 	setTotal({
	// 		price: cart.reduce((prev, curr) => prev + curr.priceTotal, 0),
	// 		count: cart.reduce((prev, curr) => prev + curr.count, 0),
	// 	})
	// }, [cart])

    // const clearCart = () => {
    //     setCart([])
    // }

	// const deleteProduct = id => {
	// 	setCart(cart => cart.filter(product => id !== product.id))
	// }

	// const increase = id => {
	// 	setCart(cart => {
	// 		return cart.map(product => {
	// 			if (product.id === id) {
	// 				return {
	// 					...product,
	// 					count: ++product.count,
	// 					priceTotal: product.count * product.price,
	// 				}
	// 			}
	// 			return product
	// 		})
	// 	})
	// }

	// const decrease = id => {
	// 	setCart(cart => {
	// 		return cart.map(product => {
	// 			if (product.id === id) {
	// 				const newCount = product.count - 1 > 1 ? --product.count : 1

	// 				return {
	// 					...product,
	// 					count: newCount,
	// 					priceTotal: newCount * product.price,
	// 				}
	// 			}
	// 			return product
	// 		})
	// 	})
	// }

	// const changeValue = (id, value) => {
	// 	setCart(cart => {
	// 		return cart.map(product => {
	// 			if (product.id === id) {
	// 				return {
	// 					...product,
	// 					count: value,
	// 					priceTotal: value * product.price,
	// 				}
	// 			}
	// 			return product
	// 		})
	// 	})
	// }

	const cartItems = cart.map(product => {
		return (
			<CartItem
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
		<section className='cart'>
			<div className='cart__content container'>
				<div className='cart__items'>
					{cartItems}

					<div className='cart__button-box'>
						<button
							onClick={() => {dispatch(clearCart())}}
							className='cart__button-link'
							href='/#'
						>
							CLEAR SHOPPING CART
						</button>
						<Link to={'/catalog'} className='cart__button-link'>
							CONTINUE SHOPPING
						</Link>
					</div>
				</div>

                <FormCard />

			</div>
		</section>
	)
}

export default Cart
