import { useForm } from 'react-hook-form'
import './formCard.scss'

const FormCard = (total) => {
    const {price, count} = total

    // console.log(price)
    // console.log(count)

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
		<div className='cart__form'>
			<div className='cart__form-get'>
				<form onSubmit={handleSubmit(onSubmit)}>
					<h3 className='cart__form-get__title'>SHIPPING ADRESS</h3>

					<input
						type='text'
						placeholder='Country'
						className='registration__form__input'
						{...register('country', {
							required: 'Поле обязательно к заполнению',
							minLength: {
								value: 4,
								message: 'Не менее 4 символов',
							},
						})}
					/>
					<div style={{ height: 30, color: 'red' }}>
						{errors?.country && <p>{errors?.country?.message || 'Error!'}</p>}
					</div>

					<input
						type='text'
						placeholder='State'
						className='registration__form__input'
						{...register('state', {
							required: 'Поле обязательно к заполнению',
							minLength: {
								value: 4,
								message: 'Не менее 4 символов',
							},
						})}
					/>
					<div style={{ height: 30, color: 'red' }}>
						{errors?.state && <p>{errors?.state?.message || 'Error!'}</p>}
					</div>

					<input
						type='text'
						placeholder='State'
						className='registration__form__input'
						{...register('state', {
							required: 'Поле обязательно к заполнению',
							minLength: {
								value: 4,
								message: 'Не менее 4 символов',
							},
						})}
					/>
					<div style={{ height: 30, color: 'red' }}>
						{errors?.state && <p>{errors?.state?.message || 'Error!'}</p>}
					</div>
					{/* <p>
						<input type='text' placeholder='Postcode / Zip' />
					</p> */}

					<div className='cart-footer'>
						<div className='cart-footer__count'>Quantity: </div>
						{/* <div className='cart-footer__count'>Quantity: {count} </div> */}
						<div className='cart-footer__price'>
							{/* {priceFormatter.format(price)} руб. */}
							SUB TOTAL: {price}$
							{/* SUB TOTAL: {priceFormatter.format(price)}$ */}
						</div>
						<button>PROCEED TO CHECKOUT</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default FormCard
