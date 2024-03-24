import './subscribe.scss'

const Subscribe = () => {
    return (
			<section className='subscribe'>
				<div className='subscribe__content container'>
					<div className='info'>
						<img src='img/Layer 40.png' alt='Layer 40' />
						<p className='info__text'>
							“Vestibulum quis porttitor dui! Quisque
							<br /> viverra nunc mi, a pulvinar purus condimentum“
						</p>
					</div>
					<div className='rigth'>
						<h3>
							SUBSCRIBE
							<br />
							<span>FOR OUR NEWLETTER AND PROMOTION</span>
							{/* style='font-size: 20px;font-weight: 500;' */}
						</h3>

						<div className='box'>
							<form action='#'>
								<p>
									<input type='email' placeholder='Enter Your Email' />
								</p>
								<button type='submit'>Subscribe</button>
							</form>
						</div>
					</div>
				</div>
			</section>
		)
}
 
export default Subscribe;