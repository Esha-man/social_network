import styles from "./user.module.css";
import avatarDefault from "../../../assets/images/avatar_default.png";
import React from "react";
import {NavLink} from "react-router-dom";
import {UserType} from "../../../redux/users-reducer";


type PropsType = {
    user: UserType
    followingInProgress: number[]
    totalItemsCount: number
    currentPage: number
    pageSize: number

    onChangePage: (pageNum: number) => void
    followUsersThunk: (userId: number) => void
    unfollowUsersThunk: (userId: number) => void
}

export const User = React.memo((props: PropsType) => {


    return (
        <div>
                <span>
                    <div>
                        <NavLink to={"/profile/" + props.user.id}>
                            <img src={props.user.photos.small !== null ? props.user.photos.small :
                                avatarDefault}
                                 className={styles.usersAvatars}/>
                        </NavLink>
                    </div>
                    <div>
                        {
                            props.user.followed === true ?
                                <button disabled={props.followingInProgress.some(id => id === props.user.id)}
                                        onClick={() => {
                                            props.unfollowUsersThunk(props.user.id)
                                        }}>Unfollow</button> :
                                <button disabled={props.followingInProgress.some(id => id === props.user.id)}
                                        onClick={() => {
                                            props.followUsersThunk(props.user.id)
                                        }}>Follow</button>
                        }
                    </div>
                </span>
            <span>
                    <div>{props.user.name}</div>
                    <div>{props.user.status !== null ? <span>Status: {props.user.status}</span> :
                        <span></span>}</div>
                </span>
            <span>
                    <div>{"props.user.location.city"}</div>
                    <div>{"props.user.location.country"}</div>
                </span>

        </div>
    )
})