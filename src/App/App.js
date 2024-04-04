import './reset.scss'
import './base.scss'

import { Route, Routes, Link } from 'react-router-dom'

//import data from './../data.js'

//import { useState } from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import PageCart from './../Pages/PageCart'
import PageCatalog from './../Pages/PageCatalog'
import PageProduct from './../Pages/PageProduct'
import PageRegistration from './../Pages/PageRegistration'
import Home from './../Pages/Home'
import { useState } from 'react'

function App() {

    const [searchValue, setSearchValue] = useState('')

    
	return (
		<div className='App'>
			<>
				<Header searchValue={searchValue} setSearchValue={setSearchValue} />
				<nav>
					<ul>
						<li>
							<Link to='/'>Home</Link>
						</li>
						
						<li>
							<Link to='/product'>Product</Link>
						</li>
					</ul>
				</nav>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/cart' element={<PageCart />} />
					<Route path='/catalog' element={<PageCatalog />} />
					<Route path='/registration' element={<PageRegistration />} />
					<Route path='/product' element={<PageProduct />} />
				</Routes>

				<Footer />
			</>
		</div>
	)
}

export default App
