import React, { useState } from "react";
import './style.css';   
import menuImage from '../../assets/menu-principal.png';

function Menu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="menu-container">
            <img 
                src={menuImage} 
                alt="Menu" 
                onClick={toggleMenu} 
                className="menu-icon" 
            />
            {isOpen && (
                <ul className="dropdown">
                    <li>React</li>
                    <li>JavaScript</li>
                    <li>Java</li>
                    <li>C++</li>
                    <li>Python</li>
                </ul>
            )}
        </div>
    );
}

export default Menu;
