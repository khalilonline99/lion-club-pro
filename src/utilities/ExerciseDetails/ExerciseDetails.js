import React from 'react';
import './ExerciseDetails.css'

const ExerciseDetails = (props) => {
    const {newReqTime, breakDisplay} = props;
    return (
        <div>
            <h2>Exercise Time: {newReqTime} sec</h2>
            <h2>Break Time: {breakDisplay} sec</h2>
        </div>
    );
};

export default ExerciseDetails;