import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../home/home';
import NewPrediction from '../prediction/new-prediction/newprediction'

const Router = () => 
    <Switch>  
        <Route exact path="/home" component={Home} />
        <Route exact path="/checkploughingdate" component={NewPrediction} /> 
        <Route exact path="/history" component={Home} />   
        <Route exact path="/about" component={Home} /> 
        <Route exact path="/logout" component={Home} />       
    </Switch>

export default Router;