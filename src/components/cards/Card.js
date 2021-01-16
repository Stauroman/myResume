import React, {useEffect, useState} from "react"
import axios from "axios";

import './Card.css'

export const Card = () => {

    const [data, setData] = useState({name: "name", age: 0, exp: 0, price: 0, promo: "promo text"});
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {

        await axios.get("https://nikolaev-resume-default-rtdb.firebaseio.com/trainers/1.json")
            .then(response => {
                setData(response.data);
                setIsLoading(false);
            })
            .catch(e => {
                console.log(e);
                setIsLoading(false);
            });
    };

    return (

        <>
            {
            isLoading ?
                <div>Загрузка</div>
                :
                <div className="card">
                <img src="" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{data.name}</h5>
                    <p className="card-text">{data.promo}.</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{data.exp}</li>
                    <li className="list-group-item">{data.price}</li>
                </ul>
                <div className="card-body">
                    <a href="#" className="card-link">Профиль ВК</a>
                    <a href="#" className="card-link">Профиль инсты</a>
                </div>

            </div>
        }

        </>
    )
}


