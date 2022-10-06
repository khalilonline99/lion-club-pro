import React, { useEffect, useState } from 'react';
import './BodyContainer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPersonWalking } from '@fortawesome/free-solid-svg-icons'
import ExerciseCards from '../ExerciseCards/ExerciseCards';
import SideBar from '../SideBar/SideBar';
import { addToList, getStoredCart } from '../../utilities/FakeDb/FakeDb';
import { logDOM } from '@testing-library/react';


const BodyContainer = (props) => {
    const [cards, setCards] = useState([]);
    // console.log(props);
    const [newReqTime, setNewReqTime] = useState(0);

    useEffect(() => {
        fetch('fakeDb.json')
        .then(resp => resp.json())
        .then(data => setCards(data))
    }, [])


    useEffect(() => {
        const getStoredCartData = getStoredCart();
        let setDataToUi = [];
            /* for (let allStoredObj of getStoredCartData) {
                setDataToUi.push(allStoredObj.time)
                console.log(allStoredObj);
            } */

            getStoredCartData.map(allStoredObj => {
                setDataToUi.push(allStoredObj.time)
                console.log(allStoredObj);
            })

            // setNewReqTime(setDataToUi);
            // for (const id in getStoredCartData) {
    
            //     console.log(getStoredCartData[id]);
    
            //     if (Object.hasOwnProperty.call(getStoredCartData, id)) {
            //         const element = getStoredCartData[id];
                    
            //     }
            // }
        
    } , [])


    const addToCartBtn = (times, ids) => {

        const exerciseTimeLocal = localStorage.getItem('exercise-time')
        const exerciseTimeLocalObj = JSON.parse(exerciseTimeLocal);


        if (exerciseTimeLocalObj){

            let defaultArry = ["default"];
            let arrayLoop = exerciseTimeLocalObj.map(exerciseTimeLocalObjSingle => {
            defaultArry = [...defaultArry, exerciseTimeLocalObjSingle.id]})

            //will do nothing if the id is in the local db

            if(defaultArry.includes(ids)){

            }
            else {
                setNewReqTime(times);
                let totalTime = newReqTime + times;
                setNewReqTime(totalTime);
            }

        }
        else {
            setNewReqTime(times);
            let totalTime = newReqTime + times;
            setNewReqTime(totalTime);
        }
        
        
        
        addToList(times, ids);

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