
import './Card.css'
import chipDark from '../assets/chip-dark.svg';
import vendorEvil from '../assets/vendor-evil.svg';
import vendorBlockchain from '../assets/vendor-blockchain.svg';
import vendorNinja from '../assets/vendor-ninja.svg';
import vendorBitcoin from '../assets/vendor-bitcoin.svg';

function Card(props) {

    const { setActiveCard, number, name, cvv, expire, vendor, setVendor } = props;

    const activeCard = {
        number: number,
        name: name,
        expire: expire,
        cvv: cvv,
        vendor: vendor
      }
      

    return (
        <section className="card" onClick={ () => setActiveCard(activeCard) }>
            <section className="chip-vendor">
                <figure className="chip">
                    <img src={ chipDark } />
                </figure>
                <figure className='vendor'>
                    { vendor }
                </figure>
            </section>
            <section className="card__number">
                <p className='number'>{ number }</p>
            </section>
            <section className='name-valid'>
                <section className="card__holder">
                    <h4>CARDHOLDER NAME</h4>
                    <p>{ name }</p>
                </section>
                <section className="valid">
                    <h4>VALID THRU</h4>
                    <p>{ expire }</p>
                </section>
            </section>
        </section>
    )
}

export default Card;