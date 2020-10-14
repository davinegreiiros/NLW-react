import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Landing from './pages/Landing';  
import OphanagesMap from './pages/mapping';

function Routes (){
    return (
        <BrowserRouter>
        <Switch>
        <Route path="/" exact component={Landing}/>
        <Route path="/app" component={OphanagesMap}/>
        </Switch> 
        </BrowserRouter>
    );
}

export default Routes;