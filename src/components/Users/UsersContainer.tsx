import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {
    changePageThunkCreator,
    getUsersThunkCreator,
    followUsersThunkCreator,
    UserType, unfollowUsersThunkCreator, setCurrentPageAC
} from "../../redux/users-reducer";
import React from "react";
import {Users} from "./Users";
import {SpinnerLoader} from "../commons/SpinnerLoader/SpinnerLoader";
import {compose} from "redux";
import {withAuthRedirectHOC} from "../../hoc/withAuthRedirectHOC";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsersSelector
} from "../../redux/selectors/users-selectors";


type MapStateToPropsType = {
    users: Array<UserType>
    pageSize: number
    totalItemsCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}

type DispatchToPropsType = {
    // follow: (userId: number) => void
    // unfollow: (userId: number) => void
    // setNewUser: (users: Array<UserType>) => void
    // setCurrentPage: (page: number) => void
    // setTotalUsersCount: (totalCount: number) => void
    // spinnerLoaderFetching: (isFetching: boolean) => void
    // followingInProgressAction: (isFetching: boolean, id: number) => void
    getUsersThunk: (currentPage: number, pageSize: number) => void
    changePageThunk: (pageNum: number, pageSize: number) => void
    followUsersThunk: (userId: number) => void
    unfollowUsersThunk: (userId: number) => void
}

export type UsersType = MapStateToPropsType & DispatchToPropsType

class UsersContainer extends React.Component<UsersType> {


    componentDidMount() {
       this.props.getUsersThunk(this.props.currentPage, this.props.pageSize)
    }

    onChangePage(pageNum: number) {
        // this.props.changePageThunk(pageNum, this.props.pageSize)
        this.props.getUsersThunk(pageNum, this.props.pageSize)
    }

    render() {

        return <>
            {this.props.isFetching ? <SpinnerLoader/> : null}
            <Users
                totalItemsCount={this.props.totalItemsCount}
                pageSize={this.props.pageSize}
                onChangePage={this.onChangePage.bind(this)}
                currentPage={this.props.currentPage}
                users={this.props.users}
                followingInProgress={this.props.followingInProgress}
                followUsersThunk={this.props.followUsersThunk}
                unfollowUsersThunk={this.props.unfollowUsersThunk}


            />
        </>
    }

}

const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        users: getUsersSelector(state),
        pageSize: getPageSize(state),
        totalItemsCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}
// const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalItemsCount: state.usersPage.totalItemsCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress,
//     }
// }


// export default connect(mapStateToProps, {
//
//     getUsersThunk: getUsersThunkCreator,
//     changePageThunk: changePageThunkCreator,
//     followUsersThunk: followUsersThunkCreator,
//     unfollowUsersThunk: unfollowUsersThunkCreator,
// })(UsersContainer)

export default compose<React.ComponentType>(
    // withAuthRedirectHOC,
    connect(mapStateToProps, {
        getUsersThunk: getUsersThunkCreator,
        changePageThunk: changePageThunkCreator,
        followUsersThunk: followUsersThunkCreator,
        unfollowUsersThunk: unfollowUsersThunkCreator,
    })
)(UsersContainer)