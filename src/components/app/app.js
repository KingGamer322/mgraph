import React from 'react';
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
            <LoginMenu/>
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
    )
}

export default App;