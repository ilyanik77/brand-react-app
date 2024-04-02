import Feature from "./../components/Feature/Feature"
import Offer from './../components/Offer/Offer'
import Products from './../components/Products/Products'
import Promo from './../components/Promo/Promo'
import Subscribe from './../components/Subscribe/Subscribe'


const Home = () => {
	return (
		<>
			<Promo />
            <Offer />
            <Products />
            <Feature />
            <Subscribe />
		</>
	)
}

export default Home
