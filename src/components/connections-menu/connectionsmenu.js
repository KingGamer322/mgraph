import React from 'react';
import './connectionsmenu.css';

const Header1 = () => {
    return(<h4 className="namefirst">Имя первой вершины:</h4>)
}

const Header2 = () => {
    return(<h4 className="namesecond">Имя второй вершины:</h4>)
}

const Header3 = () => {
    return(<h4 className="connectiontype">Тип связи:</h4>)
}

const ConnectionsMenu = () => {
    return (
        <div className="connectionsmenu">
            <Header1/>
            <Header2/>
            <Header3/>
        </div>
    )
}

export default ConnectionsMenu;