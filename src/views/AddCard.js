import Top from "../components/Top";
import Card from "../components/Card";
import CardForm from "../components/CardForm";
import '../components/AddCard.css'


function AddCard(props) {
    const { cardArr, addCard, cardHolder, setCardHolder, cardNumber, setCardNumber, cvv, setCvv, expire, setExpire, vendor, setVendor, vendorLogo, setVendorLogo } = props;


    function mockCard() {
        return (<Card mockNumber='xxxx xxxx xxxx xxxx' mockName=' xxxxxx xxxxxxx' mockValid='xx/xx' />)
    }

    return (
        <section className="AddCard">
            <Top />
            <Card />
            <CardForm addCard={ addCard } cardArr={ cardArr } cardNumber={ cardNumber } setCardNumber={ setCardNumber } cardHolder={ cardHolder } setCardHolder={ setCardHolder } cvv={ cvv } setCvv={ setCvv } expire={ expire } setExpire={ setExpire } vendor={ vendor } setVendor={ setVendor } vendorLogo={ vendorLogo } setVendorLogo={ setVendorLogo } />
        </section>
    )
}

export default AddCard;