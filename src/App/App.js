import './reset.scss'
import './base.scss'

import './../data.js'


import Footer from '../Footer/Footer'
import Header from '../Header/Header'
//import Registration from '../Registration/Registration'
import Subscribe from '../Subscribe/Subscribe'
import Cart from '../Cart/Cart'
import Catalog from '../Catalog/Catalog'
import Products from '../Products/Products'
import Product from '../components/Product/Product'
//import Filter from '../Filter/Filter'
//import Feature from '../Feature/Feaure'
//import Promo from '../Promo/Promo'
//import Offer from '../Offer/Offer'
//import Products from '../Products/Products'

function App() {

    

	return (
		<div className='App'>
			<>
				<Header />
                {/* <Filter /> */}
                {/* <Promo /> */}
                {/* <Offer /> */}
                {/* <Products /> */}
                {/* <Feature /> */}
                <Catalog />
                <Cart />
                <Subscribe />
                <Products />
                <Product />
                {/* <Registration /> */}
				<Footer />
			</>
		</div>
	)
}

export default App
