import Logo from '../Logo.jsx'
import ModalMenu from '../ModalMenu/ModalMenu.jsx'
import './header.scss'
import { useState } from 'react'

import { Link } from 'react-router-dom'

import data from '../../data.js'

import { RiSearchLine } from 'react-icons/ri'
import { PiShoppingCart } from 'react-icons/pi'
import { RxHamburgerMenu } from 'react-icons/rx'
import { RxAvatar } from 'react-icons/rx'
import Search from '../Search/Search.jsx'

const Header = ({searchValue, setSearchValue}) => {
	const [showMenu, setShowMenu] = useState(data.showMenu)
	const [showSearch, setShowSearch] = useState(data.showSearch)


	const onShowSearch = () => {
		setShowSearch(!showSearch)
	}

	return (
		<header className='header'>
			<div className='header__content container'>
				<div className='logo'>
					<Link to='/'>
						<Logo />
					</Link>

					<RiSearchLine className='icon' onClick={() => onShowSearch()} />
					{showSearch && (
						<Search searchValue={searchValue} setSearchValue={setSearchValue} />
					)}
				</div>

				<div className='menu__nav'>
					
					<RxHamburgerMenu
						className='icon'
						onClick={() => setShowMenu(!showMenu)}
					/>
					{showMenu && <ModalMenu />}

					<Link to='/registration'>
						<RxAvatar className='icon' />
					</Link>

					<Link to='/cart'>
						<PiShoppingCart className='icon' />
					</Link>
				</div>
			</div>
		</header>
	)
}

export default Header
