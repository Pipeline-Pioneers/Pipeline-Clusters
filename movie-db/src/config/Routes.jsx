import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import Detail from '../pages/detail/Detail';

// Routes component to define application routes
const Routes = () => 
{
    return (
        <Switch>
            {/* Route for searching within a category */}
            <Route 
                path='/:category/search/:keyword' 
                component={Catalog}
            />
            {/* Route for viewing details of a specific item */}
            <Route 
                path='/:category/:id' 
                component={Detail}
            />
            {/* Route for viewing a category */}
            <Route 
                path='/:category' 
                component={Catalog}
            />
            {/* Default route for the home page */}
            <Route 
                path='/'
                exact 
                component={Home}
            />
        </Switch>
    );
}

export default Routes;