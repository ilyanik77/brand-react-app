import './subscribe.css'

const Subscribe = () => {
    return (
			<section class='subscribe'>
				<div class='subscribe__content container'>
					<div class='info'>
						<img src='img/Layer 40.png' alt='Layer 40' />
						<p class='info__text'>
							“Vestibulum quis porttitor dui! Quisque
							<br /> viverra nunc mi, a pulvinar purus condimentum“
						</p>
					</div>
					<div class='rigth'>
						<h3>
							SUBSCRIBE
							<br />
							<span>FOR OUR NEWLETTER AND PROMOTION</span>
							{/* style='font-size: 20px;font-weight: 500;' */}
						</h3>

						<div class='box'>
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