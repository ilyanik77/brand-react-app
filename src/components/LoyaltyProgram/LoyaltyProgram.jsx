import './loyaltyProgram.scss'

const LoyaltyProgram = () => {
	return (
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
	)
}

export default LoyaltyProgram
