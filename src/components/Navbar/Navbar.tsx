import React from "react";
import style from "./Navbar.module.css"
import {NavLink} from "react-router-dom"
import {FriendsContainer} from "../Friends/FriendsContainer";


export const Navbar = () => {
    return (
        <div className={style.nav}>

            <div className={style.navContainer}>

                <div className={style.allItems}>

                    <div className={style.item}>
                        <NavLink to="/profile" activeClassName={style.active}>Profile</NavLink>
                    </div>
                    <div className={style.item}>
                        <NavLink to="/dialogs" activeClassName={style.active}>Messages</NavLink>
                    </div>
                    {/*<div className={style.item}>*/}
                    {/*    <NavLink to="/news" activeClassName={style.active}>News</NavLink>*/}
                    {/*</div>*/}
                    {/*<div className={style.item}>*/}
                    {/*    <NavLink to="/music" activeClassName={style.active}>Music</NavLink>*/}
                    {/*</div>*/}
                    {/*<div className={style.item}>*/}
                    {/*    <NavLink to="/settings" activeClassName={style.active}>Settings</NavLink>*/}
                    {/*</div>*/}
                    <div className={style.item}>
                        <NavLink to="/users" activeClassName={style.active}>Users</NavLink>
                    </div>
                </div>

                <div className={style.friendsNav}>
                    <div>Friends</div>
                    <FriendsContainer/>
                </div>

            </div>
        </div>
    )
}