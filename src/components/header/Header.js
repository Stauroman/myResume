import React from 'react'
import {NavLink} from "react-router-dom";
import './Header.css'



const Header =()=>{
    return (
        <div >


            <ul className="header ">
                <li className="nav-item" style={{marginRight: "auto"}}>
                    <NavLink to="/"
                          className="nav-link link ">Твой Персональный Тренер</NavLink>
                </li>
                <li className="nav-item" >
                    <NavLink to="/createprofile"
                             className="nav-link link"

                    >Стать тренером
                    </NavLink>
                </li>
                <li className="nav-item" style={{marginLeft: "auto"}}>
                    <NavLink to="/registration"
                          className="nav-link link"

                    >Зарегистрироваться
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/login"
                          className="nav-link link ">Войти</NavLink>
                </li>
            </ul>

        </div>
    )
}
export default Header;