import Card from "./Card";
import './Card.css'
import './CardStack.css'

function CardStack(props) {
    const { cardArr, setActiveCard } = props;

    
    const cardStack = cardArr.map((card, index) => {
        return <Card name={ card.name } number={ card.number } cvv={ card.cvv } expire={ card.expire } vendor={ card.vendor } id={ card.key } key={ index } setActiveCard={ setActiveCard } />
    })
    

    return (
        <section className="card__stack">
            <h4>Cardstack</h4>
            { cardStack }
        </section>
    )
}

export default CardStack;