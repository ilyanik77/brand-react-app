//import ProductAdd from '../ProductAdd/ProductAdd'
import ProductItem from '../ProductItem/ProductItem'
import './productCard.scss'

const ProductCard = (props) => {

    

	return (
		<div className='product__item'>
            <ProductItem product={props.product}/>
			
            {/* <ProductAdd /> */}
			
		</div>
	)
}

export default ProductCard
