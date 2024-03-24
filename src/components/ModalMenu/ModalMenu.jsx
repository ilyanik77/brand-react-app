import './modalMenu.scss'

const ModalMenu = () => {
	return (
		<nav className='menu__nav-1'>
			<ul>
				<h3 className='menu__nav-1__title'>MENU</h3>
				<li className='first'>
					<a className='first__title' href='/#'>
						MAN
					</a>
					<ul className='second'>
						<li>
							<a href='/#'>Accessories</a>
						</li>
						<li>
							<a href='/#'>Bags</a>
						</li>
						<li>
							<a href='/#'>Denim</a>
						</li>
						<li>
							<a href='/#'>T-Shirts</a>
						</li>
					</ul>
				</li>
				<li className='first'>
					<a className='first__title' href='/#'>
						WOMAN
					</a>
					<ul className='second'>
						<li>
							<a href='/#'>Accessories</a>
						</li>
						<li>
							<a href='/#'>Jackets & Coats</a>
						</li>
						<li>
							<a href='/#'>Polos</a>
						</li>
						<li>
							<a href='/#'>T-Shirts</a>
						</li>
						<li>
							<a href='/#'>Shirts</a>
						</li>
					</ul>
				</li>
				<li className='first'>
					<a className='first__title' href='/#'>
						KIDS
					</a>
					<ul className='second'>
						<li>
							<a href='/#'>Accessories</a>
						</li>
						<li>
							<a href='/#'>Jackets & Coats</a>
						</li>
						<li>
							<a href='/#'>Polos</a>
						</li>
						<li>
							<a href='/#'>T-Shirts</a>
						</li>
						<li>
							<a href='/#'>Shirts</a>
						</li>
						<li>
							<a href='/#'>Bags</a>
						</li>
					</ul>
				</li>
			</ul>
		</nav>
	)
}

export default ModalMenu
