import React from 'react';
import './addmenu.css';

const Header1 = () => {
    return(<h4 className="addmenuname">Название:</h4>)
}

const Header2 = () => {
    return(<h4 className="addmenusize">Размер:</h4>)
}

const Header3 = () => {
    return(<h4 className="addmenutype">Тип:</h4>)
}

const Field = () => {
    return(<input className="addmenuname-input" type="text"/>)
}

const Select1 = () => {
    return (
        <select className="addmenuselectmenu1">
            <option value="Normal">Обычный</option>
            <option value="Big">Большой</option>
        </select>
    )
}

const Select2 = () => {
    return(
        <select className="addmenuselectmenu2">
            <option></option>
        </select>
    )
}

const Btn1 = () => {
    return (<button className="addmenuaddfeature">Добавить свойство</button>)
}

const Btn2 = () => {
    return (<button className="addmenuaddversh">Добавить вершину</button>)
}

const AddMenu = () => {
    return (
        <div className="addmenu">
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