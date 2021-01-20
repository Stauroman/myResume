import React from "react"

export const NoContentMsg = (props) => {
    return (
        <div className="jumbotron">
            <h1 className="display-4">Уважаемый пользователь!</h1>
            <p className="lead">К сожалению в данный момент нет доступной информации</p>

                <p>Попробуйте сделать повторный запрос</p>
                <p className="lead">
                    <a className="btn btn-primary btn-lg"  role="button"
                       onClick={props.Refresh}
                    >Обновить</a>
                </p>

        </div>
)
}