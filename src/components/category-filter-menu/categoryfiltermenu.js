import React from 'react';
import './categoryfiltermenu.css';

const Header1 = () => {
    return (<h4 className="categoryfiltermenuname">Начальная вершина:</h4>)
}

const Select1 = () => {
    return (
        <select className="categoryfiltermenuselectmenu">
            <option></option>
        </select>
    )
}

const Btn1 = () => {
    const text="Показать в визуализации";
    return (<button className="categoryfiltermenubutton1">{text}</button>)
}

const Btn2 = () => {
    const text="Добавить в визуализацию";
    return (<button className="categoryfiltermenubutton2">{text}</button>)
}

const CategoryFilterMenu = () => {
    return (
        <div className="categoryfiltermenu">
            <Header1/>
            <Select1/>
            <Btn1/>
            <Btn2/>
        </div>
    )
}

export default CategoryFilterMenu;