import CartItem from '../CartItem/CartItem.jsx'
import './cart.scss'

import data from '../../data.js'
import { useState, useEffect } from 'react'
import CartFooter from '../CartFooter/CartFooter.jsx'

const Cart = () => {
	const [cart, setCart] = useState(data.cart)
	const [total, setTotal] = useState({
		price: cart.reduce((prev, curr) => prev + curr.priceTotal, 0),
		count: cart.reduce((prev, curr) => prev + curr.count, 0),
	})

	useEffect(() => {
		setTotal({
			price: cart.reduce((prev, curr) => prev + curr.priceTotal, 0),
			count: cart.reduce((prev, curr) => prev + curr.count, 0),
		})
	}, [cart])

    const clearCart = () => {
        setCart([])
    }

	const deleteProduct = id => {
		setCart(cart => cart.filter(product => id !== product.id))
	}

	const increase = id => {
		setCart(cart => {
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
		})
	}

	const decrease = id => {
		setCart(cart => {
			return cart.map(product => {
				if (product.id === id) {
					const newCount = product.count - 1 > 1 ? --product.count : 1

					return {
						...product,
						count: newCount,
						priceTotal: newCount * product.price,
					}
				}
				return product
			})
		})
	}

	const changeValue = (id, value) => {
		setCart(cart => {
			return cart.map(product => {
				if (product.id === id) {
					return {
						...product,
						count: value,
						priceTotal: value * product.price,
					}
				}
				return product
			})
		})
	}

	const cartItems = cart.map(product => {
		return (
			<CartItem
				product={product}
				key={product.id}
				deleteProduct={deleteProduct}
				increase={increase}
				decrease={decrease}
				changeValue={changeValue}
			/>
		)
	})

	return (
		<section className='cart'>
			<div className='cart__content container'>
				<div className='cart__items'>
					{cartItems}

					<div className='cart__button-box'>
						<a onClick={clearCart} className='cart__button-link' href='/#'>
							CLEAR SHOPPING CART
						</a>
						<a className='cart__button-link' href='/#'>
							CONTINUE SHOPPING
						</a>
					</div>
				</div>

				<div className='cart__form'>
					<div className='cart__form-get'>
						<form action=''>
							<h3 className='cart__form-get__title'>SHIPPING ADRESS</h3>
							<p>
								<input type='text' placeholder='Bangladesh' />
							</p>
							<p>
								<input type='text' placeholder='State' />
							</p>
							<p>
								<input type='text' placeholder='Postcode / Zip' />
							</p>
							<button className='cart__form-get__button' type='submit'>
								GET A QUOTE
							</button>
						</form>
					</div>

					<CartFooter total={total} />

				</div>
			</div>
		</section>
	)
}

export default Cart