import './reset.scss'
import './base.scss'

import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Subscribe from '../Subscribe/Subscribe'
import Feature from '../Feature/Feaure'
import Promo from '../Promo/Promo'
import Offer from '../Offer/Offer'
import Products from '../Products/Products'

function App() {
	return (
		<div className='App'>
			<>
				<Header />
                <Promo />
                <Offer />
                <Products />
                <Feature />
                <Subscribe />
				<Footer />
			</>
		</div>
	)
}

export default App
