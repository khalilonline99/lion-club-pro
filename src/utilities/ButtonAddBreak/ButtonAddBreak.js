import React from 'react';
import './ButtonAddBreak.css'

const ButtonAddBreak = () => {
    return (
        <div className='btn-break'>
            <button className='btn-single'>10s</button>
            <button className='btn-single'>20s</button>
            <button className='btn-single'>30s</button>
            <button className='btn-single'>40s</button>
            <button className='btn-single'>50s</button>
        </div>
    );
};

export default ButtonAddBreak;