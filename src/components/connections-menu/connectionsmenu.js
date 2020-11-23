import React from 'react';
import './connectionsmenu.css';

const Header1 = () => {
    return(<h4 className="namefirst">Имя первой вершины:</h4>)
}

const Header2 = () => {
    return(<h4 className="namesecond">Имя второй вершины:</h4>)
}

const Header3 = () => {
    return(<h4 className="connectiontype">Тип связи:</h4>)
}

const Field1 = () => {
    return(<input className="namefirst-input" type="text"/>)
}

const Field2 = () => {
    return(<input className="namesecond-input" type="text"/>)
}

const Select1 = () => {
    return (
        <select className="connectionselect">
            <option></option>
        </select>
    )
}

const Btn1 = () => {
    const text="Добавить свойство";
    return(<button className="addfeatureonconnection">{text}</button>)
}

const Btn2 = () => {
    const text="Добавить связь";
    return(<button className="addconnection">{text}</button>)
}

const ConnectionsMenu = () => {
    return (
        <div className="connectionsmenu">
            <Header1/>
            <Field1/>
            <Header2/>
            <Field2/>
            <Header3/>
            <Select1/>
            <Btn1/>
            <Btn2/>
        </div>
    )
}

export default ConnectionsMenu;