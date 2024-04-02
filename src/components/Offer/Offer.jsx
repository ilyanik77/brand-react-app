import './offer.scss'

const Offer = () => {
    return ( 
        <section className="offer container">

            
            <div className="content__item">
                <img src="img/for women.png" alt="for women" />
                <div className="content__item__desc">
                    <p>
                        30% OFF 
                    </p>
                    <h3>
                        FOR WOMEN
                    </h3>
                </div>
            </div>
            <div className="content__item">
                <img src="img/for men.png" alt="for men" />
                <div className="content__item__desc">
                    <p>
                        HOT DEAL 
                    </p>
                    <h3>
                        FOR MEN
                    </h3>
                </div>
            </div>
            <div className="content__item">
                <img src="img/for kids.png" alt="for kids" />
                <div className="content__item__desc">
                    <p>
                        NEW ARRIVALS
                    </p>
                    <h3>
                        FOR KIDS
                    </h3>
                </div>
            </div>
            <div className="content__item__big">
                <img src="img/accesories.png" alt="accesories" />
                <div className="content__item__desc__big">
                    <p>
                        LUXIROUS & TRENDY 
                    </p>
                    <h3>
                        ACCESORIES
                    </h3>
                </div>
            </div>
            
            
            
            
            
        </section>
    );
}
 
export default Offer;