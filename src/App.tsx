import React from 'react';
import './App.css';

import {Navbar} from "./components/Navbar/Navbar";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer"
import {Route, Redirect, Switch, withRouter} from 'react-router-dom'
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {Login} from "./components/Login/Login";
import {NotFound} from "./components/commons/NotFound/NotFound"
import {RootStateType} from "./redux/redux-store";
import {compose} from "redux";
import {connect} from "react-redux";
import { initializeAppTC } from './redux/app-reducer';
import {SpinnerLoader} from "./components/commons/SpinnerLoader/SpinnerLoader";

class App extends React.Component<appContainerType> {
    componentDidMount() {

        this.props.initializeAppTC()
    }


    render() {
        console.log(this.props.initialized)
        if (!this.props.initialized) {
            return <SpinnerLoader/>
        }
         return (
            <div className="app-wrapper">
                <div className={"app-header"}>
                    <HeaderContainer/>
                </div>

                <div className={"app-container"}>
                    <div className={"app-navbar"}>
                        <Navbar/>
                    </div>
                    <div className="app-wrapper-content">
                        <Switch>
                            <Route path={"/profile"} render={() => <ProfileContainer/>}/>
                            <Route exact path={"/"} render={() => <ProfileContainer/>}/>
                            <Route path={"/profile/:userId?"} render={() => <ProfileContainer/>}/>
                            <Route path={"/dialogs"} render={() => <DialogsContainer/>}/>
                            <Route path={"/users"} render={() => <UsersContainer/>}/>
                            <Route path={"/login"} render={() => <Login/>}/>
                            <Route path={"/404"} render={() => <NotFound/>}/>
                            <Redirect from={"*"} to={"/404"}/>
                        </Switch>
                    </div>

                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: RootStateType) => ({
     initialized: state.app.initialized
})

export default compose<React.ComponentType>(
    connect (mapStateToProps, {initializeAppTC}),
    withRouter
)(App);


type MapStateToPropsType = {
    initialized: boolean
}
type MapDispatchToPropsType = {
    initializeAppTC: () => void
}

export type appContainerType = MapStateToPropsType & MapDispatchToPropsType