import './reset.scss'
import './base.scss'

import { Route, Routes } from 'react-router-dom'

import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import PageCart from './../Pages/PageCart'
import PageCatalog from './../Pages/PageCatalog'
import SinglePageProduct from '../Pages/SinglePageProduct'
import PageRegistration from './../Pages/PageRegistration'
import Home from './../Pages/Home'
import { useState } from 'react'

function App() {
	const [searchValue, setSearchValue] = useState('')

	return (
		<div className='App'>
			<>
				<Header searchValue={searchValue} setSearchValue={setSearchValue} />

				<Routes>
					<Route exact path='/' element={<Home />} />
					<Route exact path='/cart' element={<PageCart />} />
					<Route exact path='/catalog' element={<PageCatalog />} />
					<Route exact path='/product/:id' element={<SinglePageProduct />} />
					<Route exact path='/registration' element={<PageRegistration />} />
				</Routes>

				<Footer />
			</>
		</div>
	)
}

export default App
