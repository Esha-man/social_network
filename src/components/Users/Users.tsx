import {UserType} from "../../redux/users-reducer";
import React from "react";
import {Paginator} from "../commons/Paginator/Paginator";
import {User} from "./User/User";


type PropsType = {
    users: Array<UserType>
    totalItemsCount: number
    currentPage: number
    pageSize: number
    followingInProgress: number[]

    onChangePage: (pageNum: number) => void
    followUsersThunk: (userId: number) => void
    unfollowUsersThunk: (userId: number) => void
}

export const Users = React.memo((props: PropsType) => {

    const portionSize = 10

    return (
        <div>

            <Paginator pageSize={props.pageSize}
                       totalItemsCount={props.totalItemsCount}
                       onChangePage={props.onChangePage}
                       currentPage={props.currentPage}
                       portionSize={portionSize}
            />

            {props.users.map((user: UserType) => <User key={user.id}
                                                       user={user}
                                                       followingInProgress={props.followingInProgress}
                                                       followUsersThunk={props.followUsersThunk}
                                                       totalItemsCount={props.totalItemsCount}
                                                     pageSize={props.pageSize}
                                                       unfollowUsersThunk={props.unfollowUsersThunk}
                                                       currentPage={props.currentPage}
                                                       onChangePage={props.onChangePage}/>)}


        </div>
    )
})