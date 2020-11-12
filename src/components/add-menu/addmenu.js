import React from 'react';

const Header1 = () => {
    return(<h4>Название:</h4>)
}

const Header2 = () => {
    return(<h4>Размер:</h4>)
}

const Header3 = () => {
    return(<h4>Тип:</h4>)
}

const Field = () => {
    return(<input type="text"/>)
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

const AddMenu = () => {
    return (
        <div>
            <Header1/>
            <Field/>
            <Header2/>
            <Select1/>
            <Header3/>
            <Select2/>
        </div>
    )
}

export default AddMenu;