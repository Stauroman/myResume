import React from "react";
import {useHistory} from "react-router-dom";

import './Card.css'

interface ICard {
    name: string;
    id: number;
    age: number;
    promo: string;
    city: string;
    price: string;
    exp: number;
    img: string;
}

export const Card: React.FC<ICard> = (props) => {


    let history = useHistory();
    const openProfile = () => {
        history.push("/profile/" + `${props.id}`);
    }
    return (

        <div className="card">
            <img src={props.img} className="activator" alt="..."/>
            <div className="card-content">
                <h5 className="card-title activator grey-text text-darken-4">{props.name}</h5>
                <p className="card-content">{props.promo}.</p>
            </div>
            <ul className="card-body">
                <li className="card-content">опыт работы {props.exp} лет</li>
                <li className="card-content">{props.price}</li>
            </ul>
            <div className="card-body">
                <a href="#" className="card-link">Телефон</a>
                <a href="#" className="card-link">Записаться онлайн</a>
            </div>
            <button className="waves-effect waves-light btn"
                    onClick={openProfile}>Подробнее
            </button>
        </div>
    )}