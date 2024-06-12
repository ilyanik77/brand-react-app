import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import './productCard.scss'
import { setCurrentProductItem } from '../../Redux/productItemSlice'

const ProductCard = ({ product }) => {
	const { img, title, description, price, id } = product
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleClick = () => {
			dispatch(setCurrentProductItem(product))
			// history.push(`/app/${game.title}`)
            navigate(`/product/${product.id}`)
		}

	return (
		<div className='product__item'>
			
			<img src={`./../img/${img}`} alt='product' />
			<div className='product__content'>
				<h3 className='product__title'>{title}</h3>
				<p className='product__text'>{description}</p>
				<div className='product__box'>
					<p className='product__price'>${price}</p>
					<Link
						to={`/product/${id}`}
						className='product__btn'
						onClick={handleClick}
					>
						More detailed...
					</Link>
				</div>
			</div>
		</div>
	)
}

export default ProductCard
