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

const AddMenu = () => {
    return (
        <div className="addmenu">
            <Header1/>
            <Header2/>
            <Header3/>
        </div>
    )
}

export default AddMenu;