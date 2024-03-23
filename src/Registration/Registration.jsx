const Registration = () => {
    return (
			<section class='registration'>
				<div class='registration__content container'>
					<div class='registration__form'>
						<form action='/#'>
							<h4 class='registration__form__title'>Your Name</h4>
							<p>
								<input
									class='registration__form__input'
									type='text'
									placeholder='First Name'
								/>
							</p>
							<p>
								<input
									class='registration__form__input'
									type='text'
									placeholder='Last Name'
								/>
							</p>
							<p>
								<input
									class='registration__form__radio'
									type='radio'
									name='level'
								/>
								Male
								<input
									class='registration__form__radio'
									type='radio'
									name='level'
									checked
								/>
								Female
							</p>
							<h4 class='registration__form__title'>Login details</h4>
							<p>
								<input
									class='registration__form__input'
									type='email'
									placeholder='Email'
								/>
							</p>
							<p>
								<input
									class='registration__form__input'
									type='password'
									placeholder='Password'
								/>
							</p>
							<p class='registration__form__text'>
								Please use 8 or more characters, with at least 1 number and a
								mixture of uppercase and lowercase letters
							</p>
							<p>
								<button class='registration__form__but' type='submit'>
									JOIN NOW
									<img src='img/Group.svg' alt='Group' />
								</button>
							</p>
						</form>
					</div>
					<div class='registration__perks'>
						<h3 class='registration__perks__title'>LOYALTY HAS ITS PERKS</h3>
						<p class='registration__perks__text'>
							Get in on the loyalty program where you can earn points and unlock
							serious perks. Starting with these as soon as you join:
						</p>
						<ul class='registration__perks__ul'>
							<li class='registration__perks__li'>
								<img src='img/Vector.svg' alt='Vector' />
								15% off welcome offer
							</li>
							<li class='registration__perks__li'>
								<img src='img/Vector.svg' alt='Vector' />
								Free shipping, returns and exchanges on all orders
							</li>
							<li class='registration__perks__li'>
								<img src='img/Vector.svg' alt='Vector' />
								$10 off a purchase on your birthday
							</li>
							<li class='registration__perks__li'>
								<img src='img/Vector.svg' alt='Vector' />
								Early access to products
							</li>
							<li class='registration__perks__li'>
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