import { useState } from "react";


import Card from "../components/Card";
import CardStack from "../components/CardStack";
import Top from "../components/Top";

import '../components/Home.css'

function Home(props) {
    const { cardArr, toggleHeading, heading, setVendor } = props;

  const [activeCard, setActiveCard] = useState({})

    
    return (
        <section className="Home">
            <Top toggleHeading={ toggleHeading } heading={ heading } />
            <section className="active__card">
                <h4>ACTIVE CARD</h4>
                <Card name={ activeCard.name } number={ activeCard.number } cvv={ activeCard.cvv } expire={ activeCard.expire } vendor={ activeCard.vendor } setVendor={ setVendor } />
            </section>
                <CardStack cardArr={ cardArr } setActiveCard={ setActiveCard } />
            <button className="new__card--button" onClick={ toggleHeading }>ADD NEW CARD</button>
        </section>
    )
}

export default Home;