import React, {Component} from "react"

import './App.css';

class App extends Component {

    state= {
        hello: true,
        name: "Ivan",
        age: 25,
        isVisible: false
    };

    showName = () =>{
        alert("Hello " + this.state.name)
    }
    changeUser = () => {
        this.setState({name: 'Nik', age: 30});
    }

    helloOrBye = () => {this.setState({hello: !this.state.hello})}
    showContent = () => {this.setState({isVisible : !this.state.isVisible})}



    render() {
    const {name, age, hello} = this.state;

        return (
            <div>
                <p>{hello ? "Hello" : "Bye"} {name}, возраст: {age}</p>
                <br />
                <button onClick={this.showName}>Alert Button</button>
                <button onClick={this.changeUser}>ChangeUser</button>
                <button onClick={this.showContent}>ShowContent</button>
                <button onClick={this.helloOrBye}>{hello ? "exit" : "enter"}</button>
            </div>

        )
    }
}
export default App;
