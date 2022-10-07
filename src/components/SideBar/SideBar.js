import React, { useEffect, useState } from 'react';
import ButtonAddBreak from '../../utilities/ButtonAddBreak/ButtonAddBreak';
import ExerciseDetails from '../../utilities/ExerciseDetails/ExerciseDetails';
import { brkTimeToLocal, getBreakData } from '../../utilities/FakeDb/FakeDb';
import './SideBar.css'

import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SideBar = (props) => {
    const [breakDisplay, SetBreakDisplay] = useState(0);

    const btnBreak = (brktime) => {
        SetBreakDisplay(brktime);
        brkTimeToLocal(brktime);
}

    useEffect(()=> {
        const getBreakTimeData = getBreakData();
        SetBreakDisplay(getBreakTimeData);

    }, [])

    const notify = () => {
        toast.info("Congratulations! You've done it.", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000,
            hideProgressBar: true
          });
    }

    

    return (
        <div>
            {/* image, name and address */}
            <div>
                <div className='sidebar-personal-info'>
                <img className='user-image' src="https://cdn3d.iconscout.com/3d/premium/thumb/user-profile-2871145-2384395.png" alt="" />
                <section className='texts-details'>
                    <h3>Ibrahim Khalil</h3>
                    <p>Cumilla, Bangladesh</p>
                </section>
                </div>
                <div className='health-properties'>
                    <div>
                    <h3>74 kg</h3>
                    <h4>Weight</h4>
                    </div>
                    <div>
                    <h3>5'4"</h3>
                    <h4>Height</h4>
                    </div>
                    <div>
                    <h3>27 Yrs</h3>
                    <h4>Age</h4>
                    </div>
                </div>
            </div>

        {/* add a break */}
            <div>
                <ButtonAddBreak
                btnBreak = {btnBreak}
                ></ButtonAddBreak>
            </div>

        {/* Exercise Details*/}
        <div>
            <ExerciseDetails
            newReqTime = {props.newReqTime}
            breakDisplay = {breakDisplay}
            ></ExerciseDetails>
        </div>

        <div>
            <button onClick={notify} >Activity Completed</button>
            <ToastContainer />
        </div>

        </div>
    );
};

export default SideBar;