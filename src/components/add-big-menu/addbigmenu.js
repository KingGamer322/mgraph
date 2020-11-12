import React from 'react';

const Header1 = () => {
    return(<h4>Название:</h4>)
}

const Header2 = () => {
    return(<h4>Тема:</h4>)
}

const Header3 = () => {
    return(<h4>Описание:</h4>)
}

const Header4 = () => {
    return(<h4>Области использования (через запятую):</h4>)
}

const Header5 = () => {
    return(<h4>Размер:</h4>)
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

const Field4 = () => {
    return(<input type="text"/>)
}

const Select1 = () => {
    return (
        <select>
            <option value="normal">Обычный</option>
            <option value="small">Маленький</option>
            <option value="big">Большой</option>
        </select>
    )
}

const Btn = () => {
    const text="Добавить вершину";
    return(<button>{text}</button>)
}

const AddBigMenu = () => {
    return (
        <div>
            <Header1/>
            <Field1/>
            <Header2/>
            <Field2/>
            <Header3/>
            <Field3/>
            <Header4/>
            <Field4/>
            <Header5/>
            <Select1/>
            <Btn/>
        </div>
    )
}

export default AddBigMenu;