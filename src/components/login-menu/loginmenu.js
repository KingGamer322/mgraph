import React from 'react';

const Header1 = () => {
    return(<h4>Сервер:</h4>)
}

const Header2 = () => {
    return(<h4>Имя пользователя:</h4>)
}

const Header3 = () => {
    return(<h4>Пароль:</h4>)
}

const Field1 = () => {
    return(<input type="text"/>)
}

const Field2 = () => {
    return(<input type="text"/>)
}

const Field3 = () => {
    return(<input type="text"/>)
}

const Button = () => {
    const text="Вход";
    return(<button>{text}</button>)
}


const LoginMenu = () => {
    return (
        <div>
            <Header1/>
            <Field1/>
            <Header2/>
            <Field2/>
            <Header3/>
            <Field3/>
            <Button/>
        </div>
    )
}

export default LoginMenu;