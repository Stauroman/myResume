import React, {Component} from "react"

import './App.css';
import ChangeUser from '../ChangeUser'
class App extends Component {

    state = {
        hello: true,
        name: "User",
        age: 25,
        isVisible: true,
        arrNum: 0,
        users: ["Ivan", "Boris", "Roman", "Alex"],
        hrefs: [
            {href: '1.html', text: 'ссылка 1'},
            {href: '2.html', text: 'ссылка 2'},
            {href: '3.html', text: 'ссылка 3'},
        ]
    };

    greetUser = () => {
        alert("Hello " + this.state.name)
    }

    handleChangeUser = () => {
            const {arrNum, users} = this.state;
            let returnValue = users[arrNum];
            this.setState({arrNum: arrNum+1});
            if (arrNum === users.length-1) {
                this.setState({arrNum: 0});
            }
            this.setState({name:returnValue})
    }
    helloOrBye = () => {
        this.setState({hello: !this.state.hello})
    }
    toggleVisibleInfo = () => {
        this.setState({isVisible: !this.state.isVisible})
    }


    render() {

        const {name, age, hello, isVisible} = this.state;
        const content = <p>{hello ? "Hello" : "Bye"} {name}, возраст: {age}</p>;
        const visibleContent = isVisible ? content : null;

        const usersList = this.state.users.map((item, index) => {
                return (
                    <li key={index}>{item} - {index + 1}</li>
                )
            }
        )
        const hrefList = this.state.hrefs.map((item, index) => {
            return (
                <li key={index}><a href={item.href}>{item.text}</a></li>
            )
        })
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

                <br/>
                <button onClick={this.greetUser}>Greet User</button>
                <button onClick={this.toggleVisibleInfo}>{isVisible ? "Hide User Info" : "Show User Info"}</button>
                <ChangeUser  onClick={()=>this.handleChangeUser()}/>
                <button onClick={this.helloOrBye}>{hello ? "exit" : "enter"}</button>
            </div>

        )
    }
}

export default App;
