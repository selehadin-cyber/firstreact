import React from 'react'
import Carditem from './Carditem'
import "./Cards.css"

function Cards() {
    return (
        <div className="cards">
            <h1>check out these epic destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <Carditem 
                        src = {require('../images/img-9.jpg').default}
                        text="explore new stuff that you have never seen before"
                        label="Adventure"
                        path="/Services"
                        />
                        <Carditem 
                        src = {require('../images/img-2.jpg').default}
                        text="explore new stuff that you have never seen before"
                        label="Adventure"
                        path="/Services"
                        />
                        <Carditem 
                        src = {require('../images/img-9.jpg').default}
                        text="explore new stuff that you have never seen before"
                        label="Adventure"
                        path="/Services"
                        />
                    </ul>
                    <ul className="cards__items">
                        <Carditem 
                        src = {require('../images/furkish.jpg').default}
                        text="explore new stuff that you have never seen before"
                        label="Adventure"
                        path="/Services"
                        />
                        <Carditem 
                        src = {require('../images/furkish.jpg').default}
                        text="explore new stuff that you have never seen before"
                        label="Adventure"
                        path="/Services"
                        />
                        <Carditem 
                        src = {require('../images/selo.jpg').default}
                        text="explore new stuff that you have never seen before"
                        label="Adventure"
                        path="/Services"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
