import React from 'react';
import ButtonAddBreak from '../../utilities/ButtonAddBreak/ButtonAddBreak';
import ExerciseDetails from '../../utilities/ExerciseDetails/ExerciseDetails';
import './SideBar.css'

const SideBar = () => {
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
                    <h3>65 kg</h3>
                    <h4>Weight</h4>
                    </div>
                    <div>
                    <h3>65 kg</h3>
                    <h4>Weight</h4>
                    </div>
                    <div>
                    <h3>65 kg</h3>
                    <h4>Weight</h4>
                    </div>
                </div>
            </div>

        {/* add a break */}
            <div>
                <ButtonAddBreak></ButtonAddBreak>
            </div>

        {/* Exercise Details*/}
        <div>
            <ExerciseDetails></ExerciseDetails>
        </div>

        <div>
            <button>Activity Completed</button>
        </div>

        </div>
    );
};

export default SideBar;