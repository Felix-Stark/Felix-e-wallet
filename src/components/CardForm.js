import './CardForm.css'


import { useNavigate } from 'react-router-dom';

function CardForm(props) {
    const { cardArr, addCard, cardHolder, setCardHolder, cardNumber, setCardNumber, cvv, setCvv, expire, setExpire, vendor, setVendor, vendorLogo, setVendorLogo } = props;

    const navigate = useNavigate();

    function createCard(event) {
        event.preventDefault();
        const card = {
            id: cardArr.length,
            number: cardNumber,
            name: cardHolder,
            expire: expire,
            cvv: cvv,
            vendor: vendor
                
          }
          
          
          addCard(card)
          navigate('/')
    }


    return (
        <form className="card__form">
            <h4>Add new card</h4>
            <label htmlFor="card-number">Card Number</label>
            <input type="text" id="card-number" onKeyUp={ (event) => setCardNumber(event.target.value)} />
            <label htmlFor="card-holder">Cardholder Name</label>
            <input type="text" id="card-holder" onKeyUp={ (event) => setCardHolder(event.target.value) } />
            <section className='valid-cvv'>
                <aside className='expire'>
                    <label htmlFor="expire">Valid Thru</label>
                    <input type="text" id="expire" onKeyUp={ (event) => setExpire(event.target.value) } />
                </aside>
                <aside className='cvv'>
                    <label htmlFor="cvv">CVV</label>
                    <input type="text" id="cvv" onKeyUp={ (event) => setCvv(event.target.value) } />
                </aside>
            </section>
            <h4>Vendor</h4>
            <select id="vendor" onChange={ (event) => setVendor(event.target.value) }>
                <option>Choose your vendor</option>
                <option value="evil">EVIL CORP</option>
                <option value="bitcoin">BITCOIN INC</option>
                <option value="ninja">NINJA BANK</option>
                <option value="block">BLOCK CHAIN INC</option>
            </select>
            <button className='add__card--button' onClick={ createCard }>Add Card</button>
        </form>
    )
}

export default CardForm;