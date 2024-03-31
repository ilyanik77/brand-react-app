import Feature from "../../Feature/Feaure"
import Offer from "../../Offer/Offer"
import Products from "../../Products/Products"
import Promo from "../../Promo/Promo"
import Subscribe from "../../Subscribe/Subscribe"


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
