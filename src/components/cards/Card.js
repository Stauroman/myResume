import React from "react";
import { useHistory } from "react-router-dom";

import './Card.css'


export const Card = (props) => {


    let history = useHistory();
    const openProfile = () => {
        history.push("/profile/" + `${props.id}`);
    }
    return (

        <div className="card">
            <img src={props.img} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.promo}.</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">опыт работы {props.exp} лет</li>
                <li className="list-group-item">{props.price}</li>
            </ul>
            <div className="card-body">
                <a href="#" className="card-link">Телефон</a>
                <a href="#" className="card-link">Записаться онлайн</a>
            </div>
            <button className="btn btn-primary btn-lg"
            onClick={openProfile}>Подробнее</button>
        </div>
    )
}



