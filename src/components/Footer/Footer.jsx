import { TfiFacebook } from 'react-icons/tfi'
import { FaInstagram } from 'react-icons/fa'
import { FaPinterestP } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'

import './footer.scss'

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='footer__content container'>
				<p className='footer__text'>© 2022 Brand All Rights Reserved.</p>
				<nav className='footer__nav'>
					<a className='footer__nav__link' href='/#'>
						<TfiFacebook />
					</a>
					<a className='footer__nav__link' href='/#'>
						<FaInstagram />
					</a>
					<a className='footer__nav__link' href='/#'>
						<FaPinterestP />
					</a>
					<a className='footer__nav__link' href='/#'>
						<FaTwitter />
					</a>
				</nav>
			</div>
		</footer>
	)
}

export default Footer
