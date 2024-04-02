import './reset.scss'
import './base.scss'

//import data from './../data.js'

//import { useState } from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import PageCart from './Pages/PageCart'
//import PageCatalog from './Pages/PageCatalog'
//import PageProduct from './Pages/PageProduct'
//import PageRegistration from './Pages/PageRegistration'
//import Home from './Pages/Home'

function App() {
	return (
		<div className='App'>
			<>
				<Header />
				{/* <Home /> */}
				{/* <PageProduct /> */}
				{/* <PageRegistration /> */}
				{/* <PageCatalog /> */}
				<PageCart />

				<Footer />
			</>
		</div>
	)
}

export default App
