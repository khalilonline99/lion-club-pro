import React from 'react';
import './ExerciseDetails.css'

const ExerciseDetails = (props) => {
    return (
        <div>
            <h2>Exercise Time: {props.newReqTime} sec</h2>
            <h2>Break Time: sec</h2>
        </div>
    );
};

export default ExerciseDetails;