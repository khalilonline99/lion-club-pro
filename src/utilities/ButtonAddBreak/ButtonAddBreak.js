import React from 'react';
import './ButtonAddBreak.css'

const ButtonAddBreak = (props) => {

    return (
        <div>
            <h3>Add Time Break:</h3>
            <div className='btn-break'>
            <button className='btn-single' onClick={()=> props.btnBreak(10)} > <span>10</span>s</button>
            <button className='btn-single' onClick={()=> props.btnBreak(20)} > <span>20</span>s</button>
            <button className='btn-single' onClick={()=> props.btnBreak(30)} > <span>30</span>s</button>
            <button className='btn-single' onClick={()=> props.btnBreak(40)} > <span>40</span>s</button>
            <button className='btn-single' onClick={()=> props.btnBreak(50)} > <span>50</span>s</button>
            </div>
        </div>
    );
};

export default ButtonAddBreak;