import React from 'react';
import LoginMenu from '../login-menu';
import AddBigMenu from '../add-big-menu';
import AddMenu from '../add-menu';
import CategoryFilterMenu from '../category-filter-menu';
import ChangeMenu from '../change-menu';

const App = () => {
    return (
        <div className="app">
            <LoginMenu/>
            <AddMenu/>
            <CategoryFilterMenu/>
            <AddBigMenu/>
            <ChangeMenu/>
        </div>
    )
}

export default App;