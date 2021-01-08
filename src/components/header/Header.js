import React from 'react'
import {NavLink} from "react-router-dom";
import './header.css'



const Header =()=>{
    return (
        <div >

            <ul className="header nav">
                <li className="nav-item">
                    <NavLink to="/"
                          className="nav-link link ">Тут будет название проекта</NavLink>
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