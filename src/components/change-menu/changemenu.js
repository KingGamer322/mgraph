import React from 'react';

const Header1 = () => {
    return (<h4>Вершина:</h4>)
}

const Header2 = () => {
    return (<h4>Название:</h4>)
}

const Header3 = () => {
    return (<h4>Тема:</h4>)
}

const Header4 = () => {
    return (<h4>Описание:</h4>)
}

const Header5 = () => {
    return (<h4>Области использования (через запятую):</h4>)
}

const Header6 = () => {
    return (<h4>Размер:</h4>)
}

const Select1 = () => {
    return (
        <select>
            <option></option>
        </select>
    )
}

const Select2 = () => {
    return (
        <select>
            <option></option>
        </select>
    )
}

const Select3 = () => {
    return (
        <select>
            <option value="Normal">Обычный</option>
            <option value="Small">Маленький</option>
            <option value="Big">Большой</option>
        </select>
    )
}

const Field1 = () => {
    return (<input type="text"/>)
}

const Field2 = () => {
    return (<input type="text"/>)
}

const Field3 = () => {
    return (<input type="text"/>)
}

const Btn1 = () => {
    const text="Изменить выбранную вершину";
    return (<button>{text}</button>)
}

const Btn2 = () => {
    const text="Удалить выбранную вершину";
    return (<button>{text}</button>)
}

const ChangeMenu = () => {
    return (
        <div>
            <Header1/>
            <Select1/>
            <Header2/>
            <Field1/>
            <Header3/>
            <Select2/>
            <Header4/>
            <Field2/>
            <Header5/>
            <Field3/>
            <Header6/>
            <Select3/>
            <Btn1/>
            <Btn2/>
        </div>
    )
}

export default ChangeMenu;