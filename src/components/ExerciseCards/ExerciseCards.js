import React from 'react';
import './ExerciseCards.css';

const ExerciseCards = (props) => {
    const {thumbnail, age, exercise, about, time, id} = props.card;
    console.log(props);
    return (
        <div  className='cards-all'>
            <div className='card-info'>
            <img className='card-img' src={thumbnail} alt="" />
            <h3>{exercise}</h3>
            <p>Details: {about}</p>
            <p>For Age: {age}</p>
            <p>Required Time: {time} Sec</p>
            </div>
            
            <button className='btn-card-list'>
            <p style={{borderRadius: "10px"}} onClick={()=> props.addToCartBtn(id)} >Add to List</p>
            </button>
         
        </div>
    );
};

export default ExerciseCards;