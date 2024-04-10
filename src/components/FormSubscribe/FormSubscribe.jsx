import { useForm } from 'react-hook-form'
import './formSubscribe.scss'

const FormSubscribe = () => {
	const {
		register,
		formState: { errors, isValid },
		handleSubmit,
		reset,
	} = useForm({ mode: 'onBlur' })

	const onSubmit = data => {
		alert(JSON.stringify(data))
		reset()
	}

	return (
		<>
			<h3>
				SUBSCRIBE
				<br />
				<span>FOR OUR NEWLETTER AND PROMOTION</span>
				{/* style='font-size: 20px;font-weight: 500;' */}
			</h3>
			<div className='subscribe__box'>
				<form onSubmit={handleSubmit(onSubmit)}>
					<p>
						
						<input
							type='email'
							placeholder='Email'
							className='registration__form__input'
							{...register('email', {
								required: 'Поле обязательно к заполнению',
								pattern: {
									value:
										/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
									message: 'Некорректный адрес почты',
								},
							})}
						/>
					</p>
					<button type='submit' disabled={!isValid}>
						Subscribe
					</button>
				</form>
				<div style={{ height: 30, color: 'red' }}>
					{errors?.email && <p>{errors?.email?.message || 'Error!'}</p>}
				</div>
			</div>
		</>
	)
}

export default FormSubscribe
