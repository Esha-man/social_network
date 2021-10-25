import React from 'react';
import './App.css';

import {Navbar} from "./components/Navbar/Navbar";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import {Music} from "./components/Music/Music";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer"
import {BrowserRouter, Route} from 'react-router-dom'
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {Login} from "./components/Login/Login";


function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">

                <div className={"app-header"}>
                    <HeaderContainer/>
                </div>

                <div className={"app-container"}>

                    <div className={"app-navbar"}>
                        <Navbar/>
                    </div>
                    <div className="app-wrapper-content">
                        <Route path={"/profile/:userId?"} render={() => <ProfileContainer/>}/>
                        <Route path={"/dialogs"} render={() => <DialogsContainer/>}/>
                        <Route path={"/news"} render={() => <News/>}/>
                        <Route path={"/music"} render={() => <Music/>}/>
                        <Route path={"/settings"} render={() => <Settings/>}/>
                        <Route path={"/users"} render={() => <UsersContainer/>}/>
                        <Route path={"/login"} render={() => <Login/>}/>
                    </div>

                </div>
            </div>

        </BrowserRouter>
    );
}


export default App;
