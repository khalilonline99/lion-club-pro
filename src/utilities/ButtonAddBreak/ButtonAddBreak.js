import React from 'react';
import './ButtonAddBreak.css'

const ButtonAddBreak = () => {
    return (
        <div>
            <h3>Add Time Break:</h3>
            <div className='btn-break'>
            <button className='btn-single'>10s</button>
            <button className='btn-single'>20s</button>
            <button className='btn-single'>30s</button>
            <button className='btn-single'>40s</button>
            <button className='btn-single'>50s</button>
        </div>
        </div>
    );
};

export default ButtonAddBreak;