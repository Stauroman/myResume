import React, {Component} from "react"

import './App.css';

class App extends Component {
//1 branch
    state = {
        hello: true,
        name: "Ivan",
        age: 25,
        isVisible: false,
        users: ["Ivan", "Boris", "Roman", "Alex"],
        hrefs: [
            {href: '1.html', text: 'ссылка 1'},
            {href: '2.html', text: 'ссылка 2'},
            {href: '3.html', text: 'ссылка 3'},
        ]
    };

    showName = () => {
        alert("Hello " + this.state.name)
    }
    changeUser = () => {
        this.setState({name: 'Nik', age: 30});
    }

    helloOrBye = () => {
        this.setState({hello: !this.state.hello})
    }
    toggleVisible = () => {
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
                <button onClick={this.showName}>Alert Button</button>
                <button onClick={this.changeUser}>ChangeUser</button>
                <button onClick={this.toggleVisible}>{isVisible ? "HideContent" : "ShowContent"}</button>
                <button onClick={this.helloOrBye}>{hello ? "exit" : "enter"}</button>
            </div>

        )
    }
}

export default App;
