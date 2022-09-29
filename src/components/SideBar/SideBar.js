import React from 'react';
import ButtonAddBreak from '../../utilities/ButtonAddBreak/ButtonAddBreak';
import './SideBar.css'

const SideBar = () => {
    return (
        <div>
            {/* image, name and address */}
            <div className='sidebar-personal-info'>
                <img className='user-image' src="https://cdn3d.iconscout.com/3d/premium/thumb/user-profile-2871145-2384395.png" alt="" />
                <section>
                    <h3>Niaz Ali</h3>
                    <p>Habiganj, Sylhet</p>
                </section>
            </div>

        {/* add a break */}
            <div>
                <ButtonAddBreak></ButtonAddBreak>
            </div>

        {/* Exercise Details*/}
        <div>

        </div>
        </div>
    );
};

export default SideBar;