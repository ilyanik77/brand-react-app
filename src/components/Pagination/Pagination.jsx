import './pagination.scss'

const Pagination = () => {
    return (
			<div className='pagination'>
				<div className='pagination__content'>
					<svg
						className='left'
						width='9'
						height='14'
						viewBox='0 0 9 14'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M8.99512 2L3.99512 7L8.99512 12L7.99512 14L0.995117 7L7.99512 0L8.99512 2Z'
							fill='black'
						/>
					</svg>

					{/* номера страниц */}

					<svg
						className='right'
						width='9'
						height='14'
						viewBox='0 0 9 14'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M0.994995 12L5.995 7L0.994995 2L1.995 0L8.995 7L1.995 14L0.994995 12Z'
							fill='black'
						/>
					</svg>
				</div>
			</div>
		)
}
 
export default Pagination;