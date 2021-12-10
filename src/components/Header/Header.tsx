import React from "react";
import {NavLink} from "react-router-dom";
import stylesModule from "./Header.module.css";
import {useDispatch} from "react-redux";
import {logOutTC} from "../../redux/authorization-reducer";

type HeaderPropsType = {
    login: string
    isAuthorized: boolean
}

export const Header = (props: HeaderPropsType) => {
    const dispatch = useDispatch()
    // if (props.isAuthorized) {
    //     return <span>Logout</span>
    // }
    const logoutCallback = () => {
       return dispatch(logOutTC())

    }
    return (
        <div className={stylesModule.headerContainer}>
            <div className={stylesModule.headerBody}>
                <div className={stylesModule.logo}>
                    Social network
                </div>
                <div>
                    <div>
                        {props.isAuthorized && props.login }
                    </div>
                    <div onClick={logoutCallback} className={stylesModule.loginBlock}>
                        {props.isAuthorized ? <span>Logout</span> : <NavLink to={"/login"}>Login</NavLink>}
                    </div>
                </div>


            </div>

        </div>
    )
}