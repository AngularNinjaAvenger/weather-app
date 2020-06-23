import React from 'react';

function Header() {
    return (
    <div className="header-container">
        <div className="header-top-wrapper">
        <h1>LONDON</h1>
        <div className="date-wrapper">
            <h4>18:36GMT</h4>
        </div>
        <h1>12*</h1>
        </div>
        <div className="header-bottom-wrapper">
        <span className="reloading-timmer">Reloading in 20s</span>
        <div className="progress-bar-container">
            <div className="progress-bar-wrapper">
            <div className="progress-bar">
            </div>
            </div>
        </div>
        </div>
    </div>
    )
}

export default Header;
