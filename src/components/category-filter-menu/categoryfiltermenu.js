import React from 'react';

const Header1 = () => {
    return (<h4>Начальная вершина:</h4>)
}

const Select1 = () => {
    return (
        <select>
            <option></option>
        </select>
    )
}

const Btn1 = () => {
    const text="Показать в визуализации";
    return (<button>{text}</button>)
}

const Btn2 = () => {
    const text="Добавить в визуализацию";
    return (<button>{text}</button>)
}

const CategoryFilterMenu = () => {
    return (
        <div>
            <Header1/>
            <Select1/>
            <Btn1/>
            <Btn2/>
        </div>
    )
}

export default CategoryFilterMenu;