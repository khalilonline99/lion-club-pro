import React from 'react';
import './BodyContainer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPersonWalking } from '@fortawesome/free-solid-svg-icons'


const BodyContainer = () => {
    return (
        <div className='container-full'>
            <div className='container-card-body'>
            <header className='header-part'>
                <FontAwesomeIcon className='img-fluid' icon={faPersonWalking}></FontAwesomeIcon>
                <h2>Lion Club Pro</h2>
            </header>
            </div>
        </div>
    );
};

export default BodyContainer;