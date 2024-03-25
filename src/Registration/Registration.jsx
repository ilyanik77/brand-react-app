import './registration.scss'
import FormRegistr from '../components/FormRegistr/FormRegistr';
import LoyaltyProgram from '../components/LoyaltyProgram/LoyaltyProgram';

const Registration = () => {
    return (
			<section className='registration'>
				<div className='registration__content container'>
					
					<FormRegistr />
					
					<LoyaltyProgram />
				</div>
			</section>
		)
}
 
export default Registration;