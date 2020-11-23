import React from 'react';
import './addbigmenu.css';

const Header1 = () => {
    return(<h4 className="addbigmenuname">Название:</h4>)
}

const Header2 = () => {
    return(<h4 className="addbigmenutheme">Тема:</h4>)
}

const Header3 = () => {
    return(<h4 className="addbigmenudescription">Описание:</h4>)
}

const Header4 = () => {
    return(<h4 className="addbigmenuareaofusage">Области использования (через запятую):</h4>)
}

const Header5 = () => {
    return(<h4 className="addbigmenusize">Размер:</h4>)
}

const Field1 = () => {
    return(<input className="addbigmenuinput1" type="text"/>)
}

const Field2 = () => {
    return(<input className="addbigmenuinput2" type="text"/>)
}

const Field3 = () => {
    return(<textarea className="addbigmenuinput3" type="text"></textarea>)
}

const Field4 = () => {
    return(<textarea className="addbigmenuinput4" type="text"></textarea>)
}

const Select1 = () => {
    return (
        <select className="addbigmenuselectmenu">
            <option value="normal">Обычный</option>
            <option value="small">Маленький</option>
            <option value="big">Большой</option>
        </select>
    )
}

const Btn = () => {
    const text="Добавить вершину";
    return(<button className="addbigmenubutton">{text}</button>)
}

const AddBigMenu = () => {
    return (
        <div className="addbigmenu">
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