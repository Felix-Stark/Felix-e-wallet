import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import Home from './views/Home';
import AddCard from './views/AddCard';
import Error from './views/Error'
import './App.css';
import vendorEvil from './assets/vendor-evil.svg';
import vendorBlockchain from './assets/vendor-blockchain.svg';
import vendorNinja from './assets/vendor-ninja.svg';
import vendorBitcoin from './assets/vendor-bitcoin.svg';


function App() {
  const [heading, setHeading] = useState(true)
  const navigate = useNavigate();

  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [cvv, setCvv] = useState('');
  const [expire, setExpire] = useState('');
  const [vendor, setVendor] = useState('');

  const [cardArr, setCardArr] = useState([]);

  function toggleHeading() {
    setHeading(!heading)
    navigate('/add-card')
}

  function addCard(card) {
    const cardArrCopy = [...cardArr];
    console.log(card)
    cardArrCopy.push(card);
    

    setCardArr(cardArrCopy);
  }
  

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Home cardArr={ cardArr } toggleHeading={ toggleHeading }heading={ heading } /> } setVendor={ setVendor } />
        <Route path='/add-card' element={ <AddCard cardArr={ cardArr } addCard={ addCard } cardNumber={ cardNumber } setCardNumber={ setCardNumber } cardHolder={ cardHolder } setCardHolder={ setCardHolder } cvv={ cvv } setCvv={ setCvv } expire={ expire } setExpire={ setExpire } vendor={ vendor } setVendor={ setVendor } /> } />
        <Route path='*' element={ <Error /> } />
      </Routes>
    </div>
  );
}

export default App;
