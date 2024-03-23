import './modalMenu.scss'

const ModalMenu = () => {
	return (
		<nav class='menu__nav-1'>
			<ul>
				<h3 class='menu__nav-1__title'>MENU</h3>
				<li class='first'>
					<a class='first__title' href='/#'>
						MAN
					</a>
					<ul class='second'>
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
				<li class='first'>
					<a class='first__title' href='/#'>
						WOMAN
					</a>
					<ul class='second'>
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
				<li class='first'>
					<a class='first__title' href='/#'>
						KIDS
					</a>
					<ul class='second'>
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
