import './cart.scss'

const Cart = () => {
    return (
			<section className='cart'>
				<div className='cart__content container'>
					<div className='cart__items'>
						<div className='cart__item'>
							<img width='262px' src='img/product3.png' alt='product3' />
							<div className='cart__info'>
								<h3 className='cart__title'>
									MANGO PEOPLE <br/>T-SHIRT
								</h3>
								<p className='cart__text'>
									Price: <span>$300</span>
								</p>
								<p className='cart__text'>Color: Red</p>
								<p className='cart__text'>Size: Xl</p>
								<p className='cart__text'>Quantity:</p>
							</div>
							<svg
								width='18'
								height='18'
								viewBox='0 0 18 18'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M11.2453 9L17.5302 2.71516C17.8285 2.41741 17.9962 2.01336 17.9966 1.59191C17.997 1.17045 17.8299 0.76611 17.5322 0.467832C17.2344 0.169555 16.8304 0.00177586 16.4089 0.00140366C15.9875 0.00103146 15.5831 0.168097 15.2848 0.465848L9 6.75069L2.71516 0.465848C2.41688 0.167571 2.01233 0 1.5905 0C1.16868 0 0.764125 0.167571 0.465848 0.465848C0.167571 0.764125 0 1.16868 0 1.5905C0 2.01233 0.167571 2.41688 0.465848 2.71516L6.75069 9L0.465848 15.2848C0.167571 15.5831 0 15.9877 0 16.4095C0 16.8313 0.167571 17.2359 0.465848 17.5342C0.764125 17.8324 1.16868 18 1.5905 18C2.01233 18 2.41688 17.8324 2.71516 17.5342L9 11.2493L15.2848 17.5342C15.5831 17.8324 15.9877 18 16.4095 18C16.8313 18 17.2359 17.8324 17.5342 17.5342C17.8324 17.2359 18 16.8313 18 16.4095C18 15.9877 17.8324 15.5831 17.5342 15.2848L11.2453 9Z'
									fill='#575757'
								/>
							</svg>
						</div>
						<div className='cart__item'>
							<img width='262px' src='img/product12.png' alt='product12' />
							<div className='cart__info'>
								<h3 className='cart__title'>
									MANGO PEOPLE <br/>T-SHIRT
								</h3>
								<p className='cart__text'>
									Price: <span>$300</span>
								</p>
								<p className='cart__text'>Color: Red</p>
								<p className='cart__text'>Size: Xl</p>
								<p className='cart__text'>Quantity:</p>
							</div>
							<svg
								width='18'
								height='18'
								viewBox='0 0 18 18'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M11.2453 9L17.5302 2.71516C17.8285 2.41741 17.9962 2.01336 17.9966 1.59191C17.997 1.17045 17.8299 0.76611 17.5322 0.467832C17.2344 0.169555 16.8304 0.00177586 16.4089 0.00140366C15.9875 0.00103146 15.5831 0.168097 15.2848 0.465848L9 6.75069L2.71516 0.465848C2.41688 0.167571 2.01233 0 1.5905 0C1.16868 0 0.764125 0.167571 0.465848 0.465848C0.167571 0.764125 0 1.16868 0 1.5905C0 2.01233 0.167571 2.41688 0.465848 2.71516L6.75069 9L0.465848 15.2848C0.167571 15.5831 0 15.9877 0 16.4095C0 16.8313 0.167571 17.2359 0.465848 17.5342C0.764125 17.8324 1.16868 18 1.5905 18C2.01233 18 2.41688 17.8324 2.71516 17.5342L9 11.2493L15.2848 17.5342C15.5831 17.8324 15.9877 18 16.4095 18C16.8313 18 17.2359 17.8324 17.5342 17.5342C17.8324 17.2359 18 16.8313 18 16.4095C18 15.9877 17.8324 15.5831 17.5342 15.2848L11.2453 9Z'
									fill='#575757'
								/>
							</svg>
						</div>
						<div className='cart__button-box'>
							<a className='cart__button-link' href='/#'>
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

						<div className='cart__form-checkout'>
							<p className='cart__form-checkout__sub'>SUB TOTAL $900</p>
							<p className='cart__form-checkout__grand'>GRAND TOTAL $900</p>

							<a href='/#'>PROCEED TO CHECKOUT</a>
						</div>
					</div>
				</div>
			</section>
		)
}
 
export default Cart;