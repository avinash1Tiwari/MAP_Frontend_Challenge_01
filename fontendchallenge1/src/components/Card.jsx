import React from 'react';

const Card = ({ image, title, date, location, price, tag }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <img className="w-full" src={image} alt="Card cap" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{date}</p>
        <p className="text-gray-700 text-base">{location}</p>
        <p className="text-gray-700 text-base">{price}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {tag}
        </span>
      </div>
    </div>
  );
};






export const withHigherRating = (Card) =>{
  return (props) =>{
      return (
          <div>
              <label className="absolute bg-black m-2 p-2 text-white rounded-md"> High-Rated </label>
              <Card {...props}/>
          </div>
      )
     
  }
}


export default Card;
