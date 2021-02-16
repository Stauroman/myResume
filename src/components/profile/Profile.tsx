import React, {useEffect, useState} from "react";
import {useHistory, useParams} from "react-router-dom";
import './Profile.css'
import axios from "axios";
import {Loading} from "../сaps/Loading";

interface IProfile {
    name: string;
    id: number;
    age: number;
    promo: string;
    city: string;
    price: string;
    exp: number;
    img: string;
}
interface IParams {
    params: string;
    id: string;
}
export const Profile:React.FC = () => {

    const params = useParams<IParams>();
    const [data, setData] = useState<IProfile>({name: "", id: 0, age: 0,promo:"",city:"",price:"",exp:0,img:""});
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {

        await axios.get(`https://my-json-server.typicode.com/Stauroman/demo/${params.id}`)
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
