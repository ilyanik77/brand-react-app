import './formRegistr.scss'

const FormRegistr = () => {
    return (
        <div className='registration__form'>
			<form action='/#'>
				<h4 className='registration__form__title'>Your Name</h4>
				<p>
					<input
						className='registration__form__input'
						type='text'
						placeholder='First Name'
					/>
				</p>
				<p>
					<input
						className='registration__form__input'
						type='text'
						placeholder='Last Name'
					/>
				</p>
				<p>
					<input
						className='registration__form__radio'
						type='radio'
						name='level'
					/>
					Male
					<input
						className='registration__form__radio'
						type='radio'
						name='level'
						checked
					/>
					Female
				</p>
				<h4 className='registration__form__title'>Login details</h4>
				<p>
					<input
						className='registration__form__input'
						type='email'
						placeholder='Email'
					/>
				</p>
				<p>
					<input
						className='registration__form__input'
						type='password'
						placeholder='Password'
					/>
				</p>
				<p className='registration__form__text'>
					Please use 8 or more characters, with at least 1 number and a mixture
					of uppercase and lowercase letters
				</p>
				<p>
					<button className='registration__form__but' type='submit'>
						JOIN NOW
						<img src='img/Group.svg' alt='Group' />
					</button>
				</p>
			</form>
						
		</div>
		)
}
 
export default FormRegistr;