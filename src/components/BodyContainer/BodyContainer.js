import React, { useEffect, useState } from 'react';
import './BodyContainer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPersonWalking } from '@fortawesome/free-solid-svg-icons'
import ExerciseCards from '../ExerciseCards/ExerciseCards';
import SideBar from '../SideBar/SideBar';


const BodyContainer = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('fakeDb.json')
        .then(resp => resp.json())
        .then(data => setCards(data))
    }, [])

    const addToCartBtn = () => {
        console.log('button working');
    }


    return (
        <div className='body-container-full'>
            <div className='container-full'>
                <div className='container-card-body'>
                    <header className='header-part'>
                        <FontAwesomeIcon icon={faPersonWalking}></FontAwesomeIcon>
                        <h2>Lion Club Pro</h2>
                    </header>
                </div>
                    <h3>Today Exercise Target:</h3>
                <div className='cards-in-body'>
                    {
                        cards.map(card => <ExerciseCards 
                        card = {card}
                        addToCartBtn = {addToCartBtn}
                        ></ExerciseCards>)
                    }
                    
                </div>
            </div>

            <div className='sidebar-body'>
                <SideBar></SideBar>
            </div>

        </div>
    );
};

export default BodyContainer;