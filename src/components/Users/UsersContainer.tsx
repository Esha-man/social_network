import {connect} from "react-redux";
import {RootStoreType} from "../../redux/redux-store";
import {
    followAC, followingInProgressAC,
    setCurrentPageAC,
    setNewUsersAC,
    setTotalUsersCountAC,
    spinnerLoaderFetchingAC,
    unFollowAC,
    UserType
} from "../../redux/users-reducer";
import React from "react";
import {Users} from "./Users";
import {SpinnerLoader} from "../commons/SpinnerLoader/SpinnerLoader";
import {usersAPI} from "../../api/api";


type MapStateToPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}

type DispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setNewUser: (users: Array<UserType>) => void
    setCurrentPage: (page: number) => void
    setTotalUsersCount: (totalCount: number) => void
    spinnerLoaderFetching: (isFetching: boolean) => void
    followingInProgressAction: (isFetching: boolean, id: number) => void
}

export type UsersType = MapStateToPropsType & DispatchToPropsType

class UsersContainer extends React.Component<UsersType> {


    componentDidMount() {
        this.props.spinnerLoaderFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            debugger
                this.props.spinnerLoaderFetching(false)
                this.props.setNewUser(data.items)
                this.props.setTotalUsersCount(data.totalCount)
            })
    }

    onChangePage(pageNum: number) {
        this.props.setCurrentPage(pageNum)
        this.props.spinnerLoaderFetching(true)

        usersAPI.getUsers(this.props.pageSize).then(data => {
                this.props.spinnerLoaderFetching(false)
                this.props.setNewUser(data.items);

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
                followingInProgressAction={this.props.followingInProgressAction}
                followingInProgress={this.props.followingInProgress}


            />
        </>
    }

}

const mapStateToProps = (state: RootStoreType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
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
    followingInProgressAction: followingInProgressAC,
})(UsersContainer)
