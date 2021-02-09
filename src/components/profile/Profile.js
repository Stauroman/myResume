import React, {useEffect, useState} from "react";
import {useHistory, useParams} from "react-router-dom";
import './Profile.css'
import axios from "axios";
import {Loading} from "../сaps/Loading";

export const Profile = () => {

    const params = useParams();
    const [data, setData] = useState({name: "", id: "", age: "",promo:"",city:"",price:"",exp:"",img:""});
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {

        await axios.get(`https://nikolaev-resume-default-rtdb.firebaseio.com/${params.id}.json`)
            .then(response => {
                setData(response.data);
                setIsLoading(false);
            })
            .catch(e => {
                console.log(e);
               setIsLoading(false);
            });
    };

    const history = useHistory();
    const backToList = () => {
        history.push("/");
    }
    return (
        isLoading ? <Loading /> :
        <div className="profile">
            <img src={data.img} className="card-img-top" alt="..."

            />
            <div className="card-body">
                <h5 className="card-title">{data.name}</h5>
                <p className="card-text">{data.promo}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Город {data.city} </li>
                <li className="list-group-item">опыт работы {data.exp} лет</li>
                <li className="list-group-item">{data.price}</li>
            </ul>
            <div className="card-body">
                <a href="#" className="card-link">Телефон</a>
                <a href="#" className="card-link">Записаться онлайн</a>
            </div>
            <button className="btn btn-primary btn-lg"
                    onClick={backToList}>Назад к списку </button>

        </div>
    )
}
