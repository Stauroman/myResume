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
            <div>
                <p>Registration Form</p>
                <p>e-mail:</p>
                <input name="email"
                       placeholder="Введите адрес электронной почты"
                       onChange={this.handleChange}
                       value={this.state.email}/>
                <br/>
                <p>логин:</p>
                <input name="login"
                       placeholder="Введите логин"
                       onChange={this.handleChange}
                       value={this.state.login}/>
                <br/>
                <p>имя:</p>
                <input name="name"
                       placeholder="Введите имя"
                       onChange={this.handleChange}
                       value={this.state.name}/>
                <br/>
                <p>фамилия:</p>
                <input name="surname"
                       placeholder="Введите фамилию"
                       onChange={this.handleChange}
                       value={this.state.surname}/>
                <br/>
                <p>password:</p>
                <input name="password"
                       placeholder="Введите адрес электронной почты"
                       onChange={this.handleChange}
                       value={this.state.password}/>
                <br/>
                {/*<button onSubmit={}>Зарегестрироваться</button>*/}
                <button onClick={this.logger}>valid?</button>

            </div>
        )
    }
}