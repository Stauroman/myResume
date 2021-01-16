import axios from "axios";

export const getData = async () => {

    await axios.get("https://nikolaev-resume-default-rtdb.firebaseio.com/trainers/1.json")

        .catch(e => {
            console.log(e);
        });
};

