import React from 'react'
import {NavLink} from "react-router-dom";
import './Header.css'



const Header =()=>{
    return (

        <nav>
            <div className="nav-wrapper px1 mt2 green lighten-1">
                <NavLink to="/" className="brand-logo">Твой Персональный Тренер</NavLink>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to="/createprofile">Стать тренером</NavLink></li>
                    <li><NavLink to="/registration">Зарегистрироваться</NavLink></li>
                    <li><NavLink to="/login">Войти</NavLink></li>
                </ul>
            </div>
        </nav>


    )
}
export default Header;