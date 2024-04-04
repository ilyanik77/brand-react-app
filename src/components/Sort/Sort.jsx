import { FaChevronDown } from 'react-icons/fa'
import './sort.scss'

const Sort = () => {
	return (
		<div className='sort'>
			<details className='sort__details'>
				<summary className='sort__summary'>
					<span className='sort__heading'>CHOOSE COLOR</span>
					<FaChevronDown />
				</summary>
			</details>

			<details className='sort__details'>
				<summary className='sort__summary'>
					<span className='sort__heading'>CHOOSE SIZE</span>
					<FaChevronDown />
				</summary>
				<div className='sort__box'>
					<div className='sort__check'>
						<label htmlFor='check1'>
							<input id='check1' className='sort__check1' type='checkbox' />
							XS
						</label>
						<label htmlFor='check2'>
							<input id='check2' className='sort__check2' type='checkbox' />S
						</label>
						<label htmlFor='check3'>
							<input id='check3' className='sort__check3' type='checkbox' />M
						</label>
						<label htmlFor='check4'>
							<input id='check4' className='sort__check4' type='checkbox' />L
						</label>
					</div>
				</div>
			</details>

			<details>
				<summary className='sort__summary'>
					<span className='sort__heading'>QUANTITY</span>
					<FaChevronDown />
				</summary>
			</details>
		</div>
	)
}

export default Sort
