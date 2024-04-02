import './registration.scss'
import FormRegistr from '../FormRegistr/FormRegistr';
import LoyaltyProgram from '../LoyaltyProgram/LoyaltyProgram';

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