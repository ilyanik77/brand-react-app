import Logo from '../components/Logo'
import Search from '../components/Search'
import ModalMenu from '../components/ModalMenu/ModalMenu'
import './header.scss'
import Burger from '../components/Burger'
import RegistrationLink from '../components/RegistrationLink'
import CartLink from '../components/CartLink'

const Header = () => {
	return (
		<header className='header'>
			<div className='header__content container'>
				<div className='logo'>
					<Logo />
					<Search />
				</div>

				<div className='menu__nav'>
					<Burger />
					<ModalMenu />
					<RegistrationLink />
					<CartLink />
				</div>
			</div>
		</header>
	)
}

export default Header
