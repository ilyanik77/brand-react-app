import './formSubscribe.scss'

const FormSubscribe = () => {
	return (
		<>
			<h3>
				SUBSCRIBE
				<br />
				<span>FOR OUR NEWLETTER AND PROMOTION</span>
				{/* style='font-size: 20px;font-weight: 500;' */}
			</h3>
			<div className='subscribe__box'>
				<form action='#'>
					<p>
						<input type='email' placeholder='Enter Your Email' />
					</p>
					<button type='submit'>Subscribe</button>
				</form>
			</div>
		</>
	)
}

export default FormSubscribe
