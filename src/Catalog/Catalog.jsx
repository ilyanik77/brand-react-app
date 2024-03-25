import Pagination from '../components/Pagination/Pagination'
import './catalog.scss'

const Catalog = () => {
	return (
		<section className='catalog'>
			<div className='catalog__content container'>
				
				<div className='catalog__content__box'>
					<div className='product__item'>
						<img src='img/product1.jpg' alt='product1' />
						<div className='product__content'>
							<h3 className='product__title'>ELLERY X M'O CAPSULE</h3>
							<p className='product__text'>
								Known for her sculptural takes on traditional tailoring,
								Australian arbiter of cool Kym Ellery teams up with Moda
								Operandi.
							</p>
							<p className='product__price'>$52.00</p>
						</div>
					</div>
					<div className='product__item'>
						<img height='420px' src='img/product12.png' alt='product12' />
						<div className='product__content'>
							<h3 className='product__title'>ELLERY X M'O CAPSULE</h3>
							<p className='product__text'>
								Known for her sculptural takes on traditional tailoring,
								Australian arbiter of cool Kym Ellery teams up with Moda
								Operandi.
							</p>
							<p className='product__price'>$52.00</p>
						</div>
					</div>
					<div className='product__item'>
						<img src='img/product3.png' alt='product3' />
						<div className='product__content'>
							<h3 className='product__title'>ELLERY X M'O CAPSULE</h3>
							<p className='product__text'>
								Known for her sculptural takes on traditional tailoring,
								Australian arbiter of cool Kym Ellery teams up with Moda
								Operandi.
							</p>
							<p className='product__price'>$52.00</p>
						</div>
					</div>
					<div className='product__item'>
						<img src='img/product4.png' alt='product4' />
						<div className='product__content'>
							<h3 className='product__title'>ELLERY X M'O CAPSULE</h3>
							<p className='product__text'>
								Known for her sculptural takes on traditional tailoring,
								Australian arbiter of cool Kym Ellery teams up with Moda
								Operandi.
							</p>
							<p className='product__price'>$52.00</p>
						</div>
					</div>
					<div className='product__item'>
						<img src='img/product8.png' alt='product8' />
						<div className='product__content'>
							<h3 className='product__title'>ELLERY X M'O CAPSULE</h3>
							<p className='product__text'>
								Known for her sculptural takes on traditional tailoring,
								Australian arbiter of cool Kym Ellery teams up with Moda
								Operandi.
							</p>
							<p className='product__price'>$52.00</p>
						</div>
					</div>
					<div className='product__item'>
						<img src='img/product9.png' alt='product9' />
						<div className='product__content'>
							<h3 className='product__title'>ELLERY X M'O CAPSULE</h3>
							<p className='product__text'>
								Known for her sculptural takes on traditional tailoring,
								Australian arbiter of cool Kym Ellery teams up with Moda
								Operandi.
							</p>
							<p className='product__price'>$52.00</p>
						</div>
					</div>
					<div className='product__item'>
						<img src='img/product10.png' alt='product10' />
						<div className='product__content'>
							<h3 className='product__title'>ELLERY X M'O CAPSULE</h3>
							<p className='product__text'>
								Known for her sculptural takes on traditional tailoring,
								Australian arbiter of cool Kym Ellery teams up with Moda
								Operandi.
							</p>
							<p className='product__price'>$52.00</p>
						</div>
					</div>
					<div className='product__item'>
						<img src='img/product11.png' alt='product11' />
						<div className='product__content'>
							<h3 className='product__title'>ELLERY X M'O CAPSULE</h3>
							<p className='product__text'>
								Known for her sculptural takes on traditional tailoring,
								Australian arbiter of cool Kym Ellery teams up with Moda
								Operandi.
							</p>
							<p className='product__price'>$52.00</p>
						</div>
					</div>
					<div className='product__item'>
						<img src='img/product7.png' alt='product7' />
						<div className='product__content'>
							<h3 className='product__title'>ELLERY X M'O CAPSULE</h3>
							<p className='product__text'>
								Known for her sculptural takes on traditional tailoring,
								Australian arbiter of cool Kym Ellery teams up with Moda
								Operandi.
							</p>
							<p className='product__price'>$52.00</p>
						</div>
					</div>
				</div>
				<Pagination />
			</div>
		</section>
	)
}

export default Catalog
