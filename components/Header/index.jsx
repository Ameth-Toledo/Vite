import React from "react";
import Menu from "../Menu";
import './style.css';
import reactLogo from '../../assets/react.svg';

const Header = () => {
    return (
        <header className="header">
            <img src={reactLogo} className="logo react" alt="React Logo"/>
            <nav>
            <Menu />
            <h1>Programacion Visual</h1>
            </nav>
        </header>
    );
}

export default Header;
