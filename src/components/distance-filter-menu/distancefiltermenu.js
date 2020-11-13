import React from 'react';

const Header1 = () => {
    return(<h4>Начальная вершина:</h4>)
}

const Header2 = () => {
    return(<h4>Дальность</h4>)
}

const Select1 = () => {
    return(
        <select>
            <option></option>
        </select>
    )
}

const Field1 = () => {
    return(<input type="text"/>)
}

const DistanceFilterMenu = () => {
    return (
        <div>
            <Header1/>
            <Select1/>
            <Header2/>
            <Field1/>
        </div>
    )
}

export default DistanceFilterMenu;