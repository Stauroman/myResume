import React, {useState} from "react";
import axios from "axios";


export const CreateProfileForm = () => {

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [promo, setPromo] = useState("");
    const [city, setCity] = useState("");
    const [price, setPrice] = useState("");
    const [exp, setExp] = useState("");
    const [avatar, setAvatar] = useState("");

    const postData = async () => {

        await axios.post(`https://nikolaev-resume-default-rtdb.firebaseio.com/`,
            {name: name, age: age, price: price, exp: exp, img: avatar,city: city, promo:promo})
            .then(() => {


            })
            .catch(e => {
                console.log(e);

            });
    };
    return (
        <div>
            <form className="container">
                <div className="form-group">
                    <label htmlFor="name">Введите ваше имя</label>
                    <input name="name" type="text" className="form-control" id="name"
                           placeholder="Введите ваше имя"
                           onChange={e=> setName(e.target.value)}
                           value={name}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="avatar">добавьте ссылку на фото</label>
                    <input name="avatar" type="text" className="form-control" id="avatar"
                           placeholder="добавьте ссылку на фото"
                           onChange={e=> setAvatar(e.target.value)}
                           value={avatar}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="age">Ваш возраст</label>
                    <input name="age" type="number" className="form-control" id="age"
                           placeholder="Введите ваш возраст"
                           onChange={e=> setAge(e.target.value)}
                           value={age}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="promo">Расскажите о себе</label>
                    <textarea name="promo"  className="form-control" id="promo"
                           placeholder="Расскажите о себе"
                              onChange={e=> setPromo(e.target.value)}
                              value={promo}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="city">Город в котором работаете</label>
                    <input name="city" type="text" className="form-control" id="city"
                           placeholder="Введите название города"
                           onChange={e=> setCity(e.target.value)}
                           value={city}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="price">Введите стоимость ваших услуг</label>
                    <input name="price" type="text" className="form-control" id="price"
                           placeholder="Введите стоимость ваших услуг"
                           onChange={e=> setPrice(e.target.value)}
                           value={price}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exp">Укажите ваш опыт работы, лет</label>
                    <input name="exp" type="text" className="form-control" id="exp"
                           placeholder="Укажите ваш опыт работы"
                           onChange={e=> setExp(e.target.value)}
                           value={exp}
                    />
                </div>

                <button type="button"
                        className="btn btn-primary"
                        onClick={postData}>Сохранить
                </button>

            </form>
        </div>
    )
}