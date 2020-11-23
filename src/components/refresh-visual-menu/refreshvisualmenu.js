import React from 'react';
import './refreshvisualmenu.css';

const Btn = () => {
    const text="Обновить визуализацию";
    return (<button className="refreshvisualmenubutton">{text}</button>)
}
const RefreshVisualMenu = () => {
    return (
        <div className="refreshvisualmenu">
            <Btn/>
        </div>
    )
}

export default RefreshVisualMenu;