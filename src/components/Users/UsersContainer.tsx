import {connect} from "react-redux";

import {Dispatch} from "redux";
import {RootStoreType} from "../../redux/redux-store";
import {
    followAC,
    setCurrentPageAC,
    setNewUsersAC,
    setTotalUsersCountAC,
    unFollowAC,
    UserType
} from "../../redux/users-reducer";
import UsersAPIComponent from "./UsersAPIComponent";


type StateToPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: 1 | number
}

type DispatchToPropsType = {
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setNewUser: (users: Array<UserType>) => void
    setCurrentPage: (page: number) => void
    setTotalUsersCount: (totalCount: number) => void
}

export type UsersType = StateToPropsType & DispatchToPropsType


const mapStateToProps = (state: RootStoreType): StateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchToPropsType => {

    return {
        follow: (userId: string) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: string) => {
            dispatch(unFollowAC(userId))
        },
        setNewUser: (users: Array<UserType>) => {
            dispatch(setNewUsersAC(users))
        },
        setCurrentPage: (page: number) => {
            debugger
            dispatch(setCurrentPageAC(page))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setTotalUsersCountAC(totalCount))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)