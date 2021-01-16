import React from 'react'
import axios from "axios";


const Main = () => {
    const getData =  async ()=> {
        const response = await axios.get("https://nikolaev-resume-default-rtdb.firebaseio.com/trainers/1.json")
            .then(response => console.log("response", response.data))
    }

    return(
        <div></div>
    )

}
export default Main