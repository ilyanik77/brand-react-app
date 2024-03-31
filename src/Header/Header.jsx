import Logo from '../components/Logo'
import ModalMenu from '../components/ModalMenu/ModalMenu'
import './header.scss'
import { useState } from 'react'

import data from './../data.js'

import { RiSearchLine } from 'react-icons/ri'
import { PiShoppingCart } from 'react-icons/pi'
import { RxHamburgerMenu } from 'react-icons/rx'
import { RxAvatar } from 'react-icons/rx'


const Header = () => {

    const [showMenu, setShowMenu] = useState(data.showMenu)

		const onShowMenu = () => {
			setShowMenu(!showMenu)
		}

	return (
		<header className='header'>
			<div className='header__content container'>
				<div className='logo'>
					<Logo />
					<RiSearchLine className='icon' />
				</div>

				<div className='menu__nav'>
					<RxHamburgerMenu className='icon' onClick={() => onShowMenu()}/>
					{showMenu && <ModalMenu />}
					<RxAvatar className='icon' />
					<PiShoppingCart className='icon' />
				</div>
			</div>
		</header>
	)
}

export default Header
