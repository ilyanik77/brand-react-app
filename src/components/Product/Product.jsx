import { FiChevronLeft } from 'react-icons/fi'
import { FiChevronRight } from 'react-icons/fi'
import { PiShoppingCart } from 'react-icons/pi'

import data from './../../data.js'

import Sort from '../Sort/Sort'
import './product.scss'
import { useState } from 'react'

const Product = (props) => {
	// const { img, title, price } = product

	const [cart, setCart] = useState(data.cart)

	const addProductInCart = product => {
		setCart({ cart: [...cart, product] })
		console.log(cart)
	}

	return (
		<section className='description'>
			<FiChevronLeft className='dashicons-arrow' />

			<div className='description__content container'>
				<img
					className='description__content__img'
					src={`./../img/${props.img}`}
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

					<h3>{props.title}</h3>
					<p className='description__product__text'>
						Compellingly actualize fully researched processes before proactive
						outsourcing. Progressively syndicate collaborative architectures
						before cutting-edge services. Completely visualize parallel core
						competencies rather than exceptional portals.
					</p>
					<p className='description__product__price'>{props.price}$</p>

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

					<Sort />

					<div className='description__button'>
						<a
							onClick={() => {
								addProductInCart()
							}}
							className='description__button__link'
							href='!#'
						>
							<PiShoppingCart className='icon' />
							Add to Cart
						</a>
					</div>
				</div>

				{/* <div className="description__product-box">
                    <div className="product__item">
                        <img src="img/product4.png" alt="product4" />
                        <div className="product__content">
                            <h3 className="product__title">ELLERY X M'O CAPSULE</h3>
                            <p className="product__text">
                                Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.
                            </p>
                            <p className="product__price">
                                $52.00
                            </p>
                        </div>
                        
    
                    </div>
                    <div className="product__item">
                        <img src="img/product3.png" alt="product3" />
                        <div className="product__content">
                            <h3 className="product__title">ELLERY X M'O CAPSULE</h3>
                            <p className="product__text">
                                Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.
                            </p>
                            <p className="product__price">
                                $52.00
                            </p>
                        </div>
                        
    
                    </div>
                    <div className="product__item">
                        <img src="img/product6.png" alt="product6" />
                        <div className="product__content">
                            <h3 className="product__title">ELLERY X M'O CAPSULE</h3>
                            <p className="product__text">
                                Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.
                            </p>
                            <p className="product__price">
                                $52.00
                            </p>
                        </div>
                        
    
                    </div>

                </div> */}
			</div>
			<FiChevronRight className='dashicons-arrow' />
		</section>
	)
}

export default Product
