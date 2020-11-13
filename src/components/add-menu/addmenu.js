import React from 'react';
import './addmenu.css';

const Header1 = () => {
    return(<h4 className="name">Название:</h4>)
}

const Header2 = () => {
    return(<h4 className="size">Размер:</h4>)
}

const Header3 = () => {
    return(<h4 className="addmenu-type">Тип:</h4>)
}

const Field = () => {
    return(<input className="name-input" type="text"/>)
}

const Select1 = () => {
    return (
        <select>
            <option value="Normal">Обычный</option>
            <option value="Big">Большой</option>
        </select>
    )
}

const Select2 = () => {
    return(
        <select>
            <option></option>
        </select>
    )
}

const Btn1 = () => {
    return (<button>Добавить свойство</button>)
}

const Btn2 = () => {
    return (<button>Добавить вершину</button>)
}

const AddMenu = () => {
    return (
        <div>
            <Header1/>
            <Field/>
            <Header2/>
            <Select1/>
            <Header3/>
            <Select2/>
            <Btn1/>
            <Btn2/>
        </div>
    )
}

export default AddMenu;