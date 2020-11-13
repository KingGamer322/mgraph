import React from 'react';

const Header1 = () => {
    return(<h4>Имя первой вершины:</h4>)
}

const Header2 = () => {
    return(<h4>Имя второй вершины:</h4>)
}

const Header3 = () => {
    return(<h4>Тип связи:</h4>)
}

const Field1 = () => {
    return(<input type="text"/>)
}

const Field2 = () => {
    return(<input type="text"/>)
}

const Select1 = () => {
    return (
        <select>
            <option></option>
        </select>
    )
}

const Btn1 = () => {
    const text="Добавить свойство";
    return(<button>{text}</button>)
}

const Btn2 = () => {
    const text="Добавить связь";
    return(<button>{text}</button>)
}

const ConnectionsMenu = () => {
    return (
        <div>
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