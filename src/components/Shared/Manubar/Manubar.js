import React from 'react';
import './Manubar.css'

const Manubar = (props) => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col col-md-2 logo-container">Logo</div>
                    <div className="col col-md-10 menu-container d-flex">
                        <li>Home</li>
                        <li>Contuct</li>
                        <li>Cart <sup className='text-danger'>{props.count}</sup></li>
                        <li>Log in</li>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Manubar;