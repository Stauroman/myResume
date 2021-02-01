import React, {useEffect, useState} from "react"
import axios from "axios";

import './Table.css'
import {Card} from "../cards/Card";
import {Loading} from "../сaps/Loading";
import {NoContentMsg} from "../сaps/NoContentMsg";

export const Table = () => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        getData();
    }, []);


    const getData = async () => {

        await axios.get("https://nikolaev-resume-default-rtdb.firebaseio.com/allTrainers.json")
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
                    <Loading />
                    :
                    <div className="cardTable">
                        {
                            data ?  data.map((el) => {
                            return (
                            <Card {...el}/>
                            )
                        })
                                :
                                <NoContentMsg Refresh={getData}/>
                        }
                    </div>
            }
        </>
    )
}


