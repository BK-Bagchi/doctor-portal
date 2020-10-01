import React from 'react'
import Header from '../Header/Header'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Appointment from '../Appointment/Appointment'


const Main = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route path="/appointment">
                        <Appointment />
                    </Route>
                    <Route expect path="/">
                        <Header />
                    </Route>
                </Switch>
            </Router>

        </>
    );
};

export default Main;