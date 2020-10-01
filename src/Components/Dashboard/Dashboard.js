import React from 'react'
import Navigation from '../Header/Navigation'
import './Dashboard.css'
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog, faListUl, faSignOutAlt, faTh, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons';

import DHome from './DHome/DHome'
import DAppointment from './DAppointment/DAppointment';
import DPatients from '../Appointment/DPatients/DPatients';

const Dashboard = () => {
    const { path, url } = useRouteMatch()
    return (
        <>
            <Navigation />
            <section className="dashboard">
                <div className="row w-100 h-100">
                    <div className="col-2 menu">
                        <ul className=" pl-3">
                            <Link to={`${url}`}><li><FontAwesomeIcon icon={faTh} /> Dashboard</li></Link>
                            <Link to={`${url}/appointment`}><li><FontAwesomeIcon icon={faListUl} /> Appointment</li></Link>
                            <Link to={`${url}/patients`}><li><FontAwesomeIcon icon={faUsers} /> Patients</li></Link>
                            <Link to={`${url}/prescriptions`}><li><FontAwesomeIcon icon={faFileAlt} /> Prescriptions</li></Link>
                            <Link to={`${url}/settings`}><li><FontAwesomeIcon icon={faCog} /> Settings</li></Link>
                            <Link to={`${url}/logOut`}><li><FontAwesomeIcon icon={faSignOutAlt} /> LogOut</li></Link>
                        </ul>
                    </div>
                    <div className="col-10">
                        <Switch>
                            <Route exact path={`${path}/`}>
                                <DHome />
                            </Route>
                            <Route path={`${path}/appointment`}>
                                <DAppointment />
                            </Route>
                            <Route path={`${path}/patients`}>
                                <DPatients />
                            </Route>
                            <Route path={`${path}/*`}>
                                <h1>Section Coming Soon</h1>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Dashboard;