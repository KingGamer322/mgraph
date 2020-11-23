import React from 'react';
import './searchmenu.css';

const Field1 = () => {
    return (<input className="searchmenuinput" type="text"/>)
}

const SearchMenu = () => {
    return (
        <div className="searchmenu">
            <Field1/>
        </div>
    )
}

export default SearchMenu;