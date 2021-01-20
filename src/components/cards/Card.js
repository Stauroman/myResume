import React from "react"

import './Card.css'

export const Card = (props) => {

    return (

        <div className="card">
            <img src="" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.promo}.</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">{props.exp}</li>
                <li className="list-group-item">{props.price}</li>
            </ul>
            <div className="card-body">
                <a href="#" className="card-link">Профиль ВК</a>
                <a href="#" className="card-link">Профиль инсты</a>
            </div>
        </div>
    )
}



