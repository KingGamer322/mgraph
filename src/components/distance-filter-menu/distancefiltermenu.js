import React from 'react';
import './distancefiltermenu.css';

const Header1 = () => {
    return(<h4 className="distancefiltermenufirstname">Начальная вершина:</h4>)
}

const Header2 = () => {
    return(<h4 className="distancefiltermenudistance">Дальность</h4>)
}

const Select1 = () => {
    return(
        <select className="distancefiltermenuselectmenu">
            <option></option>
        </select>
    )
}

const Field1 = () => {
    return(<input className="distancefiltermenuname-input" type="text"/>)
}

const Btn1 = () => {
    const text="Показать в визуализации";
    return (<button className="distancefiltermenubutton1">{text}</button>)
}

const Btn2 = () => {
    const text="Добавить в визуализацию";
    return (<button className="distancefiltermenubutton2">{text}</button>)
}

const DistanceFilterMenu = () => {
    return (
        <div className="distancefiltermenu">
            <Header1/>
            <Select1/>
            <Header2/>
            <Field1/>
            <Btn1/>
            <Btn2/>
        </div>
    )
}

export default DistanceFilterMenu;