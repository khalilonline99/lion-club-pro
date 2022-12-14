import React from 'react';
import './ExerciseCards.css';

const ExerciseCards = (props) => {
    const {thumbnail, age, exercise, about, time, id} = props.card;
    
    return (
        <div  className='cards-all'>
            <div className='card-info'>
            <img className='card-img' src={thumbnail} alt="" />
            <h3>{exercise}</h3>
            <p>Details: {about}</p>
            <p>For Age: {age}</p>
            <p>Required Time: {time} Sec</p>
            </div>
            
            <button className='btn-card-list' onClick={()=> props.addToCartBtn(time, id)} >Add to List
            </button>
         
        </div>
    );
};

export default ExerciseCards;