import React, {Component} from "react"

export default class LoginForm extends Component {
    state = {
        login: "",
        password: "",
        isPasswordValid: false
    }
    handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]: value})
    }


    passwordCheck = () => {

        const password = JSON.parse(localStorage.getItem(this.state.login)).password;
        this.setState({isPasswordValid: (password === this.state.password)});

        this.props.history.push('/')
    }
    logInfo = () => {
       // console.log("isPasswordValid " + this.state.isPasswordValid)
    }

    render() {

        // const text = this.state.isPasswordValid ? <p>пароль верен</p> : <p>пароль неверен</p>
        return (
            <div>
                <form className="container">
                    <div>
                        <div className="form-group">
                            <label htmlFor="login">Введите логин для входа</label>
                            <input name="login" type="login" className="form-control" id="login"
                                   placeholder="Введите логин"
                                   onChange={this.handleChange}
                                   value={this.state.login}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Введите ваш пароль</label>
                            <input name="password" type="password" className="form-control" id="password"
                                   placeholder="Введите пароль"
                                   onChange={this.handleChange}
                                   value={this.state.password}/>
                        </div>
                    </div>
                    <button className="btn btn-primary" onClick={this.passwordCheck}>Войти</button>
                </form>

            </div>
        )
    }
}