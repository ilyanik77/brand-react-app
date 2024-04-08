import { useState } from 'react'
import ProductCard from '../ProductCard/ProductCard.jsx'
import ReactPaginate from 'react-paginate'

import { useSelector, useDispatch } from 'react-redux'


import './catalog.scss'

const Catalog = () => {
    const products = useSelector(state => state.catalog.products)
	
    const [itemOffset, setItemOffset] = useState(0)
    const [itemsPerPage] = useState(6)


    const endOffset = itemOffset + itemsPerPage
    const pageCount = Math.ceil(products.length / itemsPerPage)

    
	const currentItems = products.slice(itemOffset, endOffset).map(product => {
		return (
			<>
				<ProductCard product={product} key={product.id} />
			</>
		)
	})

	
	const handlePageClick = event => {
		const newOffset = (event.selected * itemsPerPage) % products.length
		setItemOffset(newOffset)
	}

	return (
		<section className='catalog'>
			<div className='catalog__content container'>
				<div className='catalog__content__box'>
                    {currentItems}
                </div>
				<ReactPaginate
					
					className='paginate'
					breakLabel='...'
					nextLabel='next >'
					onPageChange={handlePageClick}
					pageRangeDisplayed={8}
					pageCount={pageCount}
					previousLabel='< previous'
					renderOnZeroPageCount={null}
				/>
			</div>
		</section>
	)
}

export default Catalog
