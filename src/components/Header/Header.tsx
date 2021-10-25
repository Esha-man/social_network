import React from "react";
import {NavLink} from "react-router-dom";
import style from "./Header.module.css";

type HeaderPropsType = {
    login: string
    isAuthorized: boolean
}

export const Header = (props: HeaderPropsType) => {
    return (
        <div className={style.headerContainer}>
<div className={style.headerBody}>
    <div className={style.logo}>
        Social network
    </div>

    <div className={style.loginBlock}>
        {props.isAuthorized ? props.login : <NavLink to={"/login"}>Login</NavLink>}
    </div>

</div>


        </div>
    )
}