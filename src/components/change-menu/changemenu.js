import React from 'react';
import './changemenu.css';

const Header1 = () => {
    return (<h4 className="changemenuname">Вершина:</h4>)
}

const Header2 = () => {
    return (<h4 className="changemenutitle">Название:</h4>)
}

const Header3 = () => {
    return (<h4 className="changemenutheme">Тема:</h4>)
}

const Header4 = () => {
    return (<h4 className="changemenudescription">Описание:</h4>)
}

const Header5 = () => {
    return (<h4 className="changemenuareaofusage">Области использования (через запятую):</h4>)
}

const Header6 = () => {
    return (<h4 className="changemenusize">Размер:</h4>)
}

const Select1 = () => {
    return (
        <select className="changemenuselectmenu1">
            <option></option>
        </select>
    )
}

const Select2 = () => {
    return (
        <select className="changemenuselectmenu2">
            <option></option>
        </select>
    )
}

const Select3 = () => {
    return (
        <select className="changemenuselectmenu3">
            <option value="Normal">Обычный</option>
            <option value="Small">Маленький</option>
            <option value="Big">Большой</option>
        </select>
    )
}

const Field1 = () => {
    return (<input className="changemenuinput1" type="text"/>)
}

const Field2 = () => {
    return (<textarea className="changemenuinput2" type="text"></textarea>)
}

const Field3 = () => {
    return (<textarea className="changemenuinput3" type="text"></textarea>)
}

const Btn1 = () => {
    const text="Изменить выбранную вершину";
    return (<button className="changemenubutton1">{text}</button>)
}

const Btn2 = () => {
    const text="Удалить выбранную вершину";
    return (<button className="changemenubutton2">{text}</button>)
}

const ChangeMenu = () => {
    return (
        <div className="changemenu">
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