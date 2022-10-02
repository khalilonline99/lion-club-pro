import React from 'react';
import ButtonAddBreak from '../../utilities/ButtonAddBreak/ButtonAddBreak';
import ExerciseDetails from '../../utilities/ExerciseDetails/ExerciseDetails';
import './SideBar.css'

const SideBar = (props) => {

    const btnBreak = (brktime) => {
        console.log('ok',brktime);
}

    return (
        <div>
            {/* image, name and address */}
            <div>
                <div className='sidebar-personal-info'>
                <img className='user-image' src="https://cdn3d.iconscout.com/3d/premium/thumb/user-profile-2871145-2384395.png" alt="" />
                <section>
                    <h3>Niaz Ali</h3>
                    <p>Habiganj, Sylhet</p>
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
                    <h3>27 Years</h3>
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
            ></ExerciseDetails>
        </div>

        <div>
            <button>Activity Completed</button>
        </div>

        </div>
    );
};

export default SideBar;