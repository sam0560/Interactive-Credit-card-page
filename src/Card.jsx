import BgCardFront from './assets/images/bg-card-front.png'
import BgCardBack from './assets/images/bg-card-back.png'
import CardLogo from './assets/images/card-logo.svg'

const Card = ({ cardNumber, cardHolderName, expiryMonth, expiryYear, cvc }) =>{
    return(
        <div className="cards">
            <div className='front-card'>
                <div className="card-img">
                    <img src={BgCardFront} alt=" Credit card front" className='frnt'/>
                </div>
                <div className="card-text">
                        <img src={CardLogo} alt="Credit card logo" className='card-logo'/>
                        <div className="card-number">
                            {cardNumber || <p>0000 0000 0000 0000</p>}
                        </div>
                        <div className="name-exp">
                            <div className="holder-name">
                                {cardHolderName || <p>jane applessed</p>}
                            </div>
                            <div className="exp-date">
                                {expiryMonth || <p>00</p>}
                                /{ expiryYear || <p>00</p>}
                            </div>
                        </div>
                </div>
            </div>
            <div className='back-card'>
                <div className="card-img-2">
                    <img src={BgCardBack} alt=" Credit card back" className='bck'/>
                </div>
                <div className="card-pin">
                    {cvc || <p>000</p>}
                </div>
            </div>
        </div>
    )
}
export default Card;