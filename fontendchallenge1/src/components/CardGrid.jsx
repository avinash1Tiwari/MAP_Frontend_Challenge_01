import React from 'react';
import Card ,{withHigherRating}from './Card';
// import imageSrc from '../assets/card.jpg'
import {cards} from './data'



const CardWithHigherRating = withHigherRating(Card)

const CardGrid = () => {
  return (
    <div className="flex flex-wrap justify-center ">
      {cards.map((card, index) => (
       

       
          (card.price > 700) ? 
          (<CardWithHigherRating  key={index} {...card}/>) : 
          (<Card   key={index} {...card}/>)   
      
      ))}
    </div>



  );
};
