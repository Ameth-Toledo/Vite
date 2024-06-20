import React from "react";
import menuCards from '../../../assets/react.svg'

const Cards=() => {
    return (
        <div className="Cards">
            <img src={menuCards} alt="Menu cards"/>
            <p>$100</p>
            <p>sale barato</p>
        </div>
    );
}

export default Cards;