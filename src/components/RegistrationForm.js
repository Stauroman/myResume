import React, {Component} from "react"


export default class RegistrationForm extends Component {
    state = {
        email: "",
        login: "",
        name: "",
        surname: "",
        password: "",
        isInfoVisible: false,
        isEmailValid: false,
        isPasswordValid: false,
        isFormValid: false,
        formErrors: {email: "", password: ""}
    }

    validation = (fieldName, value) => {
        let emailValid = this.state.isEmailValid;
        let passwordValid = this.state.isPasswordValid;
        let formErrors = this.state.formErrors;
        switch (fieldName) {
            case "email":
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                formErrors.email = emailValid ? "" : "Введите корректный адрес электронной почты";
                break;
            case "password":
                passwordValid = value.length >= 8;
                formErrors.password = passwordValid ? "" : "Пароль слишком короткий";
                break;
            default:
                break;
        }

        this.setState({
            isEmailValid: Boolean(emailValid),
            isPasswordValid: Boolean(passwordValid),
            formErrors: formErrors,
            isFormValid: emailValid &&
                passwordValid
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
    logger = () => {
        console.log(this.state.isEmailValid);
        console.log(this.state.isPasswordValid);
        console.log(this.state.formErrors);
        console.log(this.state.isFormValid);
    }

    render() {
        return (
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
                    <label htmlFor="password">придумайте пароль, не менее 8ми символов</label>
                    <input name="password" type="password" className="form-control" id="password"
                           placeholder="Введите пароль"
                           onChange={this.handleChange}
                           value={this.state.password}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">повторите пароль</label>
                    <input name="password" type="password" className="form-control" id="password"
                           placeholder="Повторите пароль"
                           onChange={this.handleChange}
                           value={this.state.password}/>
                </div>
                    {/*<button onSubmit={}>Зарегестрироваться</button>*/}
                    <button type="submit" className="btn btn-primary"
                        onClick={this.logger}>valid?</button>
            </form>
        )
    }
}