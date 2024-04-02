import FormSubscribe from '../FormSubscribe/FormSubscribe'
import './subscribe.scss'

const Subscribe = () => {
	return (
		<section className='subscribe'>
			<div className='subscribe__content container'>
				<div className='subscribe__info'>
					<img src='img/Layer 40.png' alt='Layer 40' />
					<p className='subscribe__info__text'>
						“Vestibulum quis porttitor dui! Quisque
						<br /> viverra nunc mi, a pulvinar purus condimentum“
					</p>
				</div>
				<div className='subscribe__rigth'>
					<FormSubscribe />
				</div>
			</div>
		</section>
	)
}

export default Subscribe
