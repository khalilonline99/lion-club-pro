import React, { useEffect, useState } from 'react';
import './BodyContainer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPersonWalking } from '@fortawesome/free-solid-svg-icons'
import ExerciseCards from '../ExerciseCards/ExerciseCards';
import SideBar from '../SideBar/SideBar';
import { addToList } from '../../utilities/FakeDb/FakeDb';


const BodyContainer = (props) => {
    const [cards, setCards] = useState([]);
    // console.log(props);
    const [newReqTime, setNewReqTime] = useState(0);

    useEffect(() => {
        fetch('fakeDb.json')
        .then(resp => resp.json())
        .then(data => setCards(data))
    }, [])


    const addToCartBtn = (id) => {
        setNewReqTime(time);
        let totalTime = newReqTime + time;
        setNewReqTime(totalTime);
        
        addToList(id);

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
                        key = {card.id}
                        addToCartBtn = {addToCartBtn}
                        ></ExerciseCards>)
                    }
                    
                </div>
            </div>

            <div className='sidebar-body'>
                <SideBar
                newReqTime = {newReqTime}
                
                ></SideBar>
            </div>

        </div>
    );
};

export default BodyContainer;