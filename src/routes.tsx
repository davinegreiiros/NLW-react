import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Landing from './pages/Landing';  
import OphanagesMap from './pages/mapping';
import Ophanage from './pages/Orphanage';
import CreateOphanage from './pages/CreateOrphanage';

function Routes (){
    return (
        <BrowserRouter>
        <Switch>
        <Route path="/" exact component={Landing}/>
        <Route path="/app" component={OphanagesMap}/>

        <Route path="/orphanages/create" component={CreateOphanage}/>
        <Route path="/orphanages/:id" component={Ophanage}/>
        </Switch> 
        </BrowserRouter>
    );
}

export default Routes;