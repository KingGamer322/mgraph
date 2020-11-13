import React from 'react';
import './loginmenu.css';

const Header1 = () => {
    return(<h4 className="server">Сервер:</h4>)
}

const Header2 = () => {
    return(<h4 className="name">Имя пользователя:</h4>)
}

const Header3 = () => {
    return(<h4 className="pass">Пароль:</h4>)
}

const Field1 = () => {
    return(<input className="server-input" type="text"/>)
}

const Field2 = () => {
    return(<input className="name-input" type="text"/>)
}

const Field3 = () => {
    return(<input className="pass-input" type="text"/>)
}

const Btn = () => {
    const text="Вход";
    return(<button className="button-loginmenu">{text}</button>)
}


const LoginMenu = () => {
    return (
        <div className="login-menu">
            <Header1/>
            <Field1/>
            <Header2/>
            <Field2/>
            <Header3/>
            <Field3/>
            <Btn/>
        </div>
    )
}

export default LoginMenu;