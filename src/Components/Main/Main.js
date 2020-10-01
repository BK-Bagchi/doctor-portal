import React from 'react'
import Header from '../Header/Header'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Appointment from '../Appointment/Appointment'
import Dashboard from '../Dashboard/Dashboard';


const Main = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route path="/dashboard">
                        <Dashboard />
                    </Route>
                    <Route path="/appointment">
                        <Appointment />
                    </Route>
                    <Route exact path="/">
                        <Header />
                    </Route>
                    <Route path="*">
                        <h1>No record found</h1>
                    </Route>
                </Switch>
            </Router>

        </>
    );
};

export default Main;