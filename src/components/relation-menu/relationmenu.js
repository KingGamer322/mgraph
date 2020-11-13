import React from 'react';

const Header1 = () => {
    return (<h4>Начальная вершина:</h4>)
}

const Header2 = () => {
    return (<h4>Конечная вершина:</h4>)
}

const Header3 = () => {
    return (<h4>Тип ребра (если удаляете, то неважно):</h4>)
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
            <option value="use">USE</option>
            <option value="ispartof">IS PART OF</option>
        </select>
    )
}

const Btn1 = () => {
    return (<button>Добавить</button>)
}

const Btn2 = () => {
    return (<button>Удалить</button>)
}

const RelationMenu = () => {
    return (
        <div>
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