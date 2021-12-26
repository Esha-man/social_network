import {UserType} from "../../redux/users-reducer";
import React from "react";
import {Paginator} from "../commons/Paginator/Paginator";
import {User} from "./User/User";


type PropsType = {
    users: Array<UserType>
    totalUsersCount: number
    currentPage: number
    pageSize: number
    followingInProgress: number[]

    onChangePage: (pageNum: number) => void
    followUsersThunk: (userId: number) => void
    unfollowUsersThunk: (userId: number) => void
}

export const Users = React.memo((props: PropsType) => {


    return (
        <div>

            <Paginator pageSize={props.pageSize} totalUsersCount={props.totalUsersCount}
                       onChangePage={props.onChangePage} currentPage={props.currentPage}/>

            {props.users.map((user: UserType) => <User key={user.id}
                                                       user={user}
                                                       followingInProgress={props.followingInProgress}
                                                       followUsersThunk={props.followUsersThunk}
                                                       totalUsersCount={props.totalUsersCount}
                                                       pageSize={props.pageSize}
                                                       unfollowUsersThunk={props.unfollowUsersThunk}
                                                       currentPage={props.currentPage}
                                                       onChangePage={props.onChangePage}/>)}
        </div>
    )
})