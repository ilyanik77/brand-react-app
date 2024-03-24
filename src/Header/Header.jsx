import Logo from '../components/Logo'
import Search from '../components/Search'
import ModalMenu from '../components/ModalMenu/ModalMenu'
import './header.scss'
import Burger from '../components/Burger'
import Registration from '../components/ModalMenu/Registration'
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
					<Registration />
					<CartLink />
				</div>
			</div>
		</header>
	)
}

export default Header
