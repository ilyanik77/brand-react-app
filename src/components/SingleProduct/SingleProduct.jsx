import { PiShoppingCart } from 'react-icons/pi'

//import Sort from '../Sort/Sort.jsx'

import './singleProduct.scss'
//import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addProductInCart } from './../../Redux/cartSlice'

const SingleProduct = () => {
	
	const dispatch = useDispatch()
    const navigate = useNavigate()
	// //const cart = useSelector(state => state.cart.cart)
	// //const [cart, setCart] = useState(data.cart)
	// //console.log(products)

	const currentProduct = useSelector(
		state => state.productItem.currentProductItem
	)
	console.log(currentProduct)

	if (!currentProduct) return <h1>NOT FOUND</h1>

	return (
		<section className='description'>
			<div className='description__content container'>
				<img
					className='description__content__img'
					src={`./../../img/${currentProduct.img}`}
					// currentProduct.img
					// `./../../img/${img}`
					alt='product'
				/>
				<div className='description__product'>
					<h4>WOMEN COLLECTION</h4>
					<svg
						width='63'
						height='4'
						viewBox='0 0 63 4'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path d='M63 0.786865H0V3.81225H63V0.786865Z' fill='#EF5B70' />
					</svg>

					<h3>{currentProduct.title}</h3>
					<p className='description__product__text'>
						Compellingly actualize fully researched processes before proactive
						outsourcing. Progressively syndicate collaborative architectures
						before cutting-edge services. Completely visualize parallel core
						competencies rather than exceptional portals.
					</p>
					<p className='description__product__price'>{currentProduct.price}$</p>

					<svg
						width='642'
						height='2'
						viewBox='0 0 642 2'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M0.5 1.49829H641.5H0.5Z'
							stroke='#EAEAEA'
							strokeLinejoin='round'
						/>
					</svg>

					{/* <Sort /> */}

					<div className='description__button'>
						<button
							onClick={() => {
								dispatch(addProductInCart(currentProduct))
								navigate('/cart')
							}}
							className='description__button__link'
							href='!#'
						>
							<PiShoppingCart className='icon' />
							Add to Cart
						</button>
					</div>
				</div>
			</div>

			{/* // 		
        // 			
        // 			
        // 				
    
        // 				
        // 		 */}
		</section>
	)

	// return (
	// )
}

export default SingleProduct
