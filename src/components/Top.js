

function Top(props) {
    const { heading } = props;

    return (
        <header>
            { heading &&<h1>E-WALLET</h1>}
            { !heading &&<h1>ADD NEW BANK CARD</h1>}
        </header>

    )
}

export default Top;