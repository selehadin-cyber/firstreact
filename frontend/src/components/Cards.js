import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Takım üyeler</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/emre.jpeg'
              text='Emre verim'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/furkish.jpg'
              text='Furkan Aycan'
              label='Luxury'
              path='/services'
            />
            <CardItem
              src='images/merwan.jpeg'
              text='Marwan Saad'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/adem.jpeg'
              text='Adem Dinçer'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/selo.jpg'
              text='Selehadin Abdurahman'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/ben.jpeg'
              text='Ben Ayed'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
