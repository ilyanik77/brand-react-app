import './registration.scss'

const Registration = () => {
    return (
			<section className='registration'>
				<div className='registration__content container'>
					<div className='registration__form'>
						<form action='/#'>
							<h4 className='registration__form__title'>Your Name</h4>
							<p>
								<input
									className='registration__form__input'
									type='text'
									placeholder='First Name'
								/>
							</p>
							<p>
								<input
									className='registration__form__input'
									type='text'
									placeholder='Last Name'
								/>
							</p>
							<p>
								<input
									className='registration__form__radio'
									type='radio'
									name='level'
								/>
								Male
								<input
									className='registration__form__radio'
									type='radio'
									name='level'
									checked
								/>
								Female
							</p>
							<h4 className='registration__form__title'>Login details</h4>
							<p>
								<input
									className='registration__form__input'
									type='email'
									placeholder='Email'
								/>
							</p>
							<p>
								<input
									className='registration__form__input'
									type='password'
									placeholder='Password'
								/>
							</p>
							<p className='registration__form__text'>
								Please use 8 or more characters, with at least 1 number and a
								mixture of uppercase and lowercase letters
							</p>
							<p>
								<button className='registration__form__but' type='submit'>
									JOIN NOW
									<img src='img/Group.svg' alt='Group' />
								</button>
							</p>
						</form>
					</div>
					<div className='registration__perks'>
						<h3 className='registration__perks__title'>LOYALTY HAS ITS PERKS</h3>
						<p className='registration__perks__text'>
							Get in on the loyalty program where you can earn points and unlock
							serious perks. Starting with these as soon as you join:
						</p>
						<ul className='registration__perks__ul'>
							<li className='registration__perks__li'>
								<img src='img/Vector.svg' alt='Vector' />
								15% off welcome offer
							</li>
							<li className='registration__perks__li'>
								<img src='img/Vector.svg' alt='Vector' />
								Free shipping, returns and exchanges on all orders
							</li>
							<li className='registration__perks__li'>
								<img src='img/Vector.svg' alt='Vector' />
								$10 off a purchase on your birthday
							</li>
							<li className='registration__perks__li'>
								<img src='img/Vector.svg' alt='Vector' />
								Early access to products
							</li>
							<li className='registration__perks__li'>
								<img src='img/Vector.svg' alt='Vector' />
								Exclusive offers & rewards
							</li>
						</ul>
					</div>
				</div>
			</section>
		)
}
 
export default Registration;