import React from "react";
import {NavLink} from "react-router-dom";
import style from "./Header.module.css";

type HeaderPropsType = {
    login: string
    isAuthorized: boolean
}

export const Header = (props: HeaderPropsType) => {
    return (
        <div>
            <div className={style.loginBlock}>
                {props.isAuthorized ? props.login : <NavLink to={"/login"}>Login</NavLink>}
            </div>
            <div className={style.header}>
                <img src="https://cdn5.f-cdn.com/contestentries/1130506/24168381/59b795c3b15c6_thumb900.jpg"
                     alt=""/>
            </div>

        </div>
    )
}