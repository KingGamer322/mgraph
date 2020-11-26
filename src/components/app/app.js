import React from 'react';
import Graph from 'react-graph-vis';
import LoginMenu from '../login-menu';
import AddBigMenu from '../add-big-menu';
import AddMenu from '../add-menu';
import CategoryFilterMenu from '../category-filter-menu';
import ChangeMenu from '../change-menu';
import ConnectionsMenu from '../connections-menu';
import DistanceFilterMenu from '../distance-filter-menu';
import RefreshVisualMenu from '../refresh-visual-menu';
import RelationMenu from '../relation-menu';
import SearchMenu from '../search-menu';
import './app.css';

const App = () => {
    return (
        <div className="app">
            <div className="app-blocks">
                <LoginMenu/>
                <div className="textaddversh">
                    <h4 className="addversh">Добавить вершину</h4>
                </div>
                <AddMenu/>
                <ConnectionsMenu/>
                <DistanceFilterMenu/>
                <CategoryFilterMenu/>
                <SearchMenu/>
                <AddBigMenu/>
                <ChangeMenu/>
                <RelationMenu/>
                <RefreshVisualMenu/>
            </div>
        </div>
    )
}

export default App;