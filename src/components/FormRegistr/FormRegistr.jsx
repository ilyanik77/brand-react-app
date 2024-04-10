import { useForm } from 'react-hook-form'
import './formRegistr.scss'

import { HiArrowLongRight } from 'react-icons/hi2'

const FormRegistr = () => {
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
		<div className='registration__form'>
			<form onSubmit={handleSubmit(onSubmit)}>
				<label>
					<p className='registration__form__label'>Your Name</p>

					<input
						type='text'
						placeholder='First Name'
						className='registration__form__input'
						{...register('firstName', {
							required: 'Поле обязательно к заполнению',
							minLength: {
								value: 4,
								message: 'Не менее 4 символов',
							},
						})}
					/>
					<div style={{ height: 30, color: 'red' }}>
						{errors?.firstName && (
							<p>{errors?.firstName?.message || 'Error!'}</p>
						)}
					</div>
					<input
						type='text'
						placeholder='Last Name'
						className='registration__form__input'
						{...register('lastName', {
							required: 'Поле обязательно к заполнению',
							minLength: {
								value: 5,
								message: 'Не менее 5 символов',
							},
						})}
					/>
					<div style={{ height: 30, color: 'red' }}>
						{errors?.lastName && <p>{errors?.lastName?.message || 'Error!'}</p>}
					</div>
				</label>
				<div>
					<p className='registration__form__label'>Your gender</p>
					<select {...register('gender')} style={{ marginLeft: 15 }}>
						<option value='female'>female</option>
						<option value='male'>male</option>
					</select>
				</div>
				

				<div style={{ height: 30, color: 'red' }}>
					{errors?.gender && <p>{errors?.gender?.message || 'Error!'}</p>}
				</div>
				<label>
					<p className='registration__form__label'>Login details</p>

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
					<div style={{ height: 30, color: 'red' }}>
						{errors?.email && <p>{errors?.email?.message || 'Error!'}</p>}
					</div>
					<input
						type='password'
						placeholder='Password'
						className='registration__form__input'
						{...register('password', {
							required: 'Поле обязательно к заполнению',
							minLength: {
								value: 8,
								message: 'Не менее 8 символов',
							},
							pattern: {
								value: '/^(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/',
								message: 'Введите правильный пароль',
							},
						})}
					/>
					<div style={{ height: 30, color: 'red' }}>
						{errors?.password && <p>{errors?.password?.message || 'Error!'}</p>}
					</div>
					<p className='registration__form__text'>
						Please use 8 or more characters, with at least 1 number and a
						mixture of uppercase and lowercase letters
					</p>
				</label>
				<button
					className='registration__form__but'
					type='submit'
					disabled={!isValid}
				>
					JOIN NOW
					<HiArrowLongRight className='button__svg' />
				</button>
			</form>
		</div>
	)
}

export default FormRegistr
