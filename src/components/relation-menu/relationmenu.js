import React from 'react';
import './relationmenu.css';

const Header1 = () => {
    return (<h4 className="relationmenufirstname">Начальная вершина:</h4>)
}

const Header2 = () => {
    return (<h4 className="relationmenusecondname">Конечная вершина:</h4>)
}

const Header3 = () => {
    return (<h4 className="relationmenutype">Тип ребра (если удаляете, то неважно):</h4>)
}

const Select1 = () => {
    return (
        <select className="relationmenuselectmenu1">
            <option></option>
        </select>
    )
}

const Select2 = () => {
    return (
        <select className="relationmenuselectmenu2">
            <option></option>
        </select>
    )
}

const Select3 = () => {
    return (
        <select className="relationmenuselectmenu3">
            <option value="use">USE</option>
            <option value="ispartof">IS PART OF</option>
        </select>
    )
}

const Btn1 = () => {
    return (<button className="relationmenubutton1">Добавить</button>)
}

const Btn2 = () => {
    return (<button className="relationmenubutton2">Удалить</button>)
}

const RelationMenu = () => {
    return (
        <div className="relationmenu">
            <Header1/>
            <Select1/>
            <Header2/>
            <Select2/>
            <Header3/>
            <Select3/>
            <Btn1/>
            <Btn2/>
        </div>
    )
}

export default RelationMenu;