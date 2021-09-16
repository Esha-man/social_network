import React from "react";
import axios from "axios"
// import * as axios from "axios";
import {UserType} from "../../redux/users-reducer";
import {Users} from "./Users";

type PropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    setCurrentPage: (page: number) => void
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setNewUser: (users: Array<UserType>) => void
    setTotalUsersCount: (totalCount: number)=> void
}

class UsersAPIComponent extends React.Component<PropsType> {


    componentDidMount() {

        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setNewUser(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onChangePage(pageNum: number) {
        console.log(this.props)
        this.props.setCurrentPage(pageNum)
        console.log(pageNum)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNum}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setNewUser(response.data.items);

            })

    }

    render() {

        return <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            onChangePage={this.onChangePage.bind(this)}
            currentPage={this.props.currentPage}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
        />
    }

}



export default UsersAPIComponent
