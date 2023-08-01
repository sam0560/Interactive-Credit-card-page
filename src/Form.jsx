import { useState } from "react"
import Card from "./Card";
import ApproveCard from "./ApproveCard";

const Form = () =>{
    const [cardHolderName, setCardHolderName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiryMonth, setExpiryMonth] = useState('');
    const [expiryYear, setExpiryYear] = useState('');
    const [cvc, setCvc] = useState('');

    const [errors, setErrors] = useState();
    const [cardAdded, setCardAdded] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // const error = [];
        if(!cardHolderName || !cardNumber || !expiryMonth || !expiryYear || !cvc) {
            alert("All field must be filed");
        } else{
            setCardAdded(true);
        }

        // if()
        // if(!cardHolderName){
        //     errors.push('Imput cannot be blank')
        // }
        
    }

    const handleCardNumber = (e) => {
        const inputValue = e.target.value;
        const formattedValue = inputValue
        .replace(/\s/g, '')
        .replace(/(\d{4})/g, '$1 ')
        .trim();
        setCardNumber(formattedValue);
    }
    return(
        <div className="contents">
            <div>
                <Card 
                    cardNumber={cardNumber}
                    cardHolderName={cardHolderName}
                    expiryMonth={expiryMonth}
                    expiryYear={expiryYear}
                    cvc={cvc}
                />
            </div>
            { !cardAdded &&
                <div>
                    <form onSubmit={handleSubmit}>
                        <div className="form-item">
                            <label>cardholder name</label><br />
                            <input type="text" placeholder="e.g Jane Appleseed" value={cardHolderName} onChange={(e) => {setCardHolderName(e.target.value)}} maxLength={25} className="form-block"/>
                            <small>{errors}</small>
                        </div>
                        <div className="form-item">
                            <label>card number</label><br />
                            <input type="text" placeholder="e.g 1234 5678 9123 0000" value={cardNumber} onChange={handleCardNumber} maxLength={19} className="form-block"/>
                        </div>
                        <div className="form-item form-flex">
                            <div>
                                <label>exp. date (mm/yy)</label>
                                <div className="f2">
                                    <input type="text" placeholder="MM" value={expiryMonth} onChange={(e) => {setExpiryMonth(e.target.value)}} maxLength={2} className="sm-form-input"/>
                                    <input type="text" placeholder="YY" value={expiryYear} onChange={(e) => {setExpiryYear(e.target.value)}} maxLength={4} className="sm-form-input"/>
                                </div>
                                {/* <small>{errors}</small> */}
                            </div>
                            
                            <div>
                                <label>cvc</label><br />
                                <input type="text" placeholder="e.g 123" value={cvc} onChange={(e) => {setCvc(e.target.value)}} maxLength={3} className="cvv-form-input"/>
                                {/* <small>{errors}</small> */}
                            </div>
                        </div>
                        <div>
                            <button>Confirm</button>
                        </div>
                    </form>
                </div>
            }

            {/* Approve card */}
            {cardAdded && 
                <div>
                    <ApproveCard/>
                </div>
            }
        </div>
    )
}

export default Form;