import React from "react";

function Header(){
    return(
        <header>
        <div className="header-container">
            <h1 className="spacing"> WMW</h1>
            <div className="category-container">
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">View Weather</a></li>
                    <li><a href="">About Me</a></li>
                    <li><a href="">Contact Me</a></li> 
                </ul>
                <span className="show-icon material-symbols-outlined">
                    menu
                </span>
            </div>
        </div>
    </header>
    )
}

export default Header;