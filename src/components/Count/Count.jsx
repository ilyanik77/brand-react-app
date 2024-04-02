import './count.scss'

const Count = ({ count, increase, decrease, changeValue, id }) => {
	return (
		<div className='count'>
			<div className='count__box'>
				<input
					type='number'
					className='count__input'
					min='1'
					max='100'
					value={count}
					onChange={e => {
						changeValue(id, +e.target.value)
					}}
				/>
			</div>
			<div className='count__controls'>
				<button
					type='button'
					className='count__up'
					onClick={() => {
						increase(id)
					}}
				>
					<img src='./img/icon-up.svg' alt='Increase' />
				</button>
				<button
					type='button'
					className='count__down'
					onClick={() => {
						decrease(id)
					}}
				>
					<img src='./img/icon-down.svg' alt='Decrease' />
				</button>
			</div>
		</div>
	)
}

export default Count
