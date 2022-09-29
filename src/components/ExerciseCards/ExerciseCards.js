import React from 'react';
import './ExerciseCards.css';

const ExerciseCards = (props) => {
    const {thumbnail, age, name, about, time} = props.card;
    console.log(props.card);
    return (
        <div className='cards-all'>
            <img src={thumbnail} alt="" />
            <h3>{name}</h3>
            <p>Details: {about}</p>
            <p>For Age: {age}</p>
            <p>Required Time: {time} Sec</p>
        </div>
    );
};

export default ExerciseCards;