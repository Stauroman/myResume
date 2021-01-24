import React, {Component} from "react"

export default class RegistrationForm extends Component {
    state = {
        email: "",
        login: "",
        name: "",
        surname: "",
        password: "",
        rePassword: "",
        isInfoVisible: false,
        isEmailValid: false,
        isPasswordValid: false,
        isRePasswordValid: false,
        isFormValid: false,
        formErrors: {email: "", password: "", rePassword: ""},
    }

    validation = (fieldName, value) => {
        let emailValid = this.state.isEmailValid;
        let passwordValid = this.state.isPasswordValid;
        let rePasswordValid = this.state.isRePasswordValid;
        let formErrors = this.state.formErrors;
        switch (fieldName) {
            case "email":
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                formErrors.email = emailValid ? "" : "Введите корректный адрес электронной почты";
                break;
            case "password":
                passwordValid = value.length >= 2;
                formErrors.password = passwordValid ? "" : "Пароль слишком короткий";
                break;
            case "rePassword":
                rePasswordValid = this.state.rePassword === this.state.password;
                formErrors.rePassword = rePasswordValid ? "" : "Пароли не совпадают";
                break;
            default:
                break;
        }

        this.setState({
            isEmailValid: Boolean(emailValid),
            isPasswordValid: Boolean(passwordValid),
            formErrors: formErrors,
            isFormValid: emailValid &&
                passwordValid && rePasswordValid
        });
    }


    handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]: value},
            () => {
                this.validation(name, value)
            })
    }
    //save user data in local storage, clear state.
    saveUserInfo = () => {
        const userInfo = {
            email: this.state.email,
            login: this.state.login,
            name: this.state.name,
            surname: this.state.surname,
            password: this.state.password
        }
        const strUserInfo = JSON.stringify(userInfo);
        localStorage.setItem(`${userInfo.login}`, strUserInfo);
        this.clearState()
        this.props.history.push('/login')

    }
    logInfo = () => {
        //console.log(this.state)
    }
    clearState = () => {
        this.setState({
            email: "",
            login: "",
            name: "",
            surname: "",
            password: "",
            rePassword: "",
            isInfoVisible: false,
            isEmailValid: false,
            isPasswordValid: false,
            isRePasswordValid: false,
            isFormValid: false,
            formErrors: {email: "", password: "", rePassword: ""}
        })
    }

    render() {
        return (
            <div>
                <form className="container">
                    <div className="form-group">
                        <label htmlFor="email">Email адрес</label>
                        <input name="email" type="email" className="form-control" id="email"
                               placeholder="Введите адрес электронной почты"
                               onChange={this.handleChange}
                               value={this.state.email}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="login">Введите ваш никнейм</label>
                        <input name="login" type="login" className="form-control" id="login"
                               placeholder="Введите логин"
                               onChange={this.handleChange}
                               value={this.state.login}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Введите ваше имя</label>
                        <input name="name" type="text" className="form-control" id="name"
                               placeholder="Введите имя"
                               onChange={this.handleChange}
                               value={this.state.name}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="surname">Введите вашу фамилию</label>
                        <input name="surname" type="text" className="form-control" id="surname"
                               placeholder="Введите фамилию"
                               onChange={this.handleChange}
                               value={this.state.surname}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">придумайте пароль, не менее 8ми символов</label>
                        <input name="password" type="password" className="form-control" id="password"
                               placeholder="Введите пароль"
                               onChange={this.handleChange}
                               value={this.state.password}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="rePassword">повторите пароль</label>
                        <input name="rePassword" type="password" className="form-control" id="rePassword"
                               placeholder="Повторите пароль"
                               onChange={this.handleChange}
                               value={this.state.rePassword}/>
                    </div>
                    <button type="button"
                            className="btn btn-primary" disabled={!this.state.isFormValid}
                            onClick={this.saveUserInfo}>Зарегистрироваться
                    </button>

                </form>
                <button onClick={this.logInfo}>log</button>
                <button onClick={this.clearState}>clear</button>
            </div>
        )
    }
}
