import React from 'react'
import {Link} from "react-router-dom";
import './header.css'

const Header =()=>{
    return (
        <div className="header d-flex">
            <h3 >
                <a>Тут будет название проекта</a>
            </h3>
            <ul >
                <li>
                    <Link to="/registration">Зарегистрироваться</Link>
                </li>
                <li>
                    <Link to="/login">Войти</Link>
                </li>

            </ul>
        </div>
    )
}
export default Header;