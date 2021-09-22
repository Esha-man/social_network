import {connect} from "react-redux";
import {RootStoreType} from "../../redux/redux-store";
import {
    followAC,
    setCurrentPageAC,
    setNewUsersAC,
    setTotalUsersCountAC,
    spinnerLoaderFetchingAC,
    unFollowAC,
    UserType
} from "../../redux/users-reducer";
import React from "react";
import axios from "axios";
import {Users} from "./Users";
import {SpinnerLoader} from "../commons/SpinnerLoader/SpinnerLoader";


type StateToPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

type DispatchToPropsType = {
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setNewUser: (users: Array<UserType>) => void
    setCurrentPage: (page: number) => void
    setTotalUsersCount: (totalCount: number) => void
    spinnerLoaderFetching: (isFetching: boolean) => void
}

export type UsersType = StateToPropsType & DispatchToPropsType

class UsersContainer extends React.Component<UsersType> {


    componentDidMount() {
this.props.spinnerLoaderFetching(true)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this
                .props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.spinnerLoaderFetching(false)
                this.props.setNewUser(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onChangePage(pageNum: number) {
        console.log(this.props)
        this.props.setCurrentPage(pageNum)
        this.props.spinnerLoaderFetching(true)
        console.log(pageNum)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNum}&count=${this
                .props.pageSize}`)
            .then(response => {
                this.props.spinnerLoaderFetching(false)
                this.props.setNewUser(response.data.items);

            })

    }

    render() {

        return <>
            {this.props.isFetching ? <SpinnerLoader/> : null}
        <Users
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            onChangePage={this.onChangePage.bind(this)}
            currentPage={this.props.currentPage}
            users={this.props.users}


        />
        </>
    }

}

const mapStateToProps = (state: RootStoreType): StateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}

// const mapDispatchToProps = (dispatch: Dispatch): DispatchToPropsType => {
//
//     return {
//         follow: (userId: string) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId: string) => {
//             dispatch(unFollowAC(userId))
//         },
//         setNewUser: (users: Array<UserType>) => {
//             dispatch(setNewUsersAC(users))
//         },
//         setCurrentPage: (page: number) => {
//
//             dispatch(setCurrentPageAC(page))
//         },
//         setTotalUsersCount: (totalCount: number) => {
//             dispatch(setTotalUsersCountAC(totalCount))
//         },
//         spinnerLoaderFetching: (isFetching: boolean) => {
//             dispatch(spinnerLoaderFetchingAC(isFetching))
//         },
//     }
// }



export default connect(mapStateToProps, {
    follow: followAC,
    unfollow: unFollowAC,
    setNewUser: setNewUsersAC,
    setCurrentPage: setCurrentPageAC,
    setTotalUsersCount: setTotalUsersCountAC,
    spinnerLoaderFetching: spinnerLoaderFetchingAC,
})(UsersContainer)
