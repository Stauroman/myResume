import React, {Component} from "react"

import './App.css';
import ChangeUser from '../ChangeUser'

class App extends Component {

    state = {
        hello: true,
        isVisible: true,
        name: "User",
        age: "",
        arrNum: 0,
        users: ["Ivan", "Boris", "Roman", "Alex"],
        hrefs: [
            {href: '1.html', text: 'ссылка 1'},
            {href: '2.html', text: 'ссылка 2'},
            {href: '3.html', text: 'ссылка 3'},
        ],
        fullNameStr: "",
        value: ""
    };

    greetUser = () => {
        alert("Hello " + this.state.name)
    }

    handleChangeUser = () => {
        const {arrNum, users} = this.state;
        let returnValue = users[arrNum];
        this.setState({arrNum: arrNum + 1});
        if (arrNum === users.length - 1) {
            this.setState({arrNum: 0});
        }
        this.setState({name: returnValue})
    }
    helloOrBye = () => {
        this.setState({hello: !this.state.hello})
    }
    toggleVisibleInfo = () => {
        this.setState({isVisible: !this.state.isVisible})
    }

    addUserToList = () => {
        this.state.users.push("пункт");
        this.setState({users: this.state.users})
    };

    deleteUserFromList = (index) => {
        this.state.users.splice(index, 1)
        this.setState({users: this.state.users})
    };

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }
    //вычисление года рождения:
    getBirthYear = () => {
        const date = new Date;
        const birthYear = date.getFullYear() - this.state.age;
        return birthYear
    }

    // getFullNameArr = () => {
    //     const fullName = this.state.fullNameStr.split("");
    //     const lastName = fullName[0];
    //     const firstName = fullName[1];
    //     const patronymic = fullName[2];
    // }
    render() {

        const {name, age, hello, isVisible} = this.state;
        const content = <p>{hello ? "Hello" : "Bye"} {name}, возраст: {age}</p>;
        const visibleContent = isVisible ? content : null;

        const usersList = this.state.users.map((item, index) => {
                return (
                    <li key={index}>{item} - {index + 1}
                        <button onClick={this.deleteUserFromList.bind(this, index)}>delete</button>
                    </li>
                )
            }
        )

        const hrefList = this.state.hrefs.map((item, index) => {
            return (
                <li key={index}><a href={item.href}>{item.text}</a></li>
            )
        })

        const fullName = this.state.fullNameStr.split(" ");
        const lastName = fullName[0];
        const firstName = fullName[1];
        const patronymic = fullName[2];
        return (
            <div>
                {visibleContent}
                <ul>
                    {hrefList}
                </ul>
                <br/>
                <ul>
                    {usersList}
                </ul>

                <input name="age"
                       type="number"
                       placeholder={"введите ваш возраст"}
                       onChange={this.handleChange}
                       value={this.state.age}
                />
                <br/>
                <span>год рождения {this.getBirthYear()}</span>
                <br/>
                <input type="text"
                       placeholder="Введите Фамилию Имя Отчество через пробел"
                       name="fullNameStr"
                       onChange={this.handleChange}
                       value={this.state.fullNameStr}
                />
                <br/>
                <p>{lastName}</p>
                <p>{firstName}</p>
                <p>{patronymic}</p>
                <button onClick={this.greetUser}>Greet User</button>
                <button onClick={this.addUserToList}>add element</button>
                <button onClick={this.deleteUserFromList.bind(this, 0)}>Delete element</button>
                <button onClick={this.toggleVisibleInfo}>{isVisible ? "Hide User Info" : "Show User Info"}</button>
                <ChangeUser onClick={() => this.handleChangeUser()}/>
                <button onClick={this.helloOrBye}>{hello ? "exit" : "enter"}</button>
            </div>

        )
    }
}

export default App;
