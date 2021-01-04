import React from 'react'
import {Link} from "react-router-dom";
import './header.css'



const Header =()=>{
    return (
        <div >

            <ul className="header nav">
                <li className="nav-item">
                    <Link to="/"
                          className="nav-link link ">Тут будет название проекта</Link>
                </li>
                <li className="nav-item" style={{marginLeft: "auto"}}>
                    <Link to="/registration"
                          className="nav-link link"

                    >Зарегистрироваться
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/login"
                          className="nav-link link ">Войти</Link>
                </li>
            </ul>

        </div>
    )
}
export default Header;