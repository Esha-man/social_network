import axios from "axios";
import {UserType} from "../redux/users-reducer";




const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {"API-KEY": "de66d353-a705-4b5f-bcd1-8006ed2d9ab2"},
})

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 20) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    deleteUsers(us: UserType) {
        return instance.delete(`follow/${us.id}`).then(response => response.data)
    },
    postUsers(us: UserType) {
        return instance.post(`follow/${us.id}`).then(response => response.data)
    },
    getProfile(userId: string) {
        return instance.get(`profile/` + userId)
    }
}

// // UsersContainer
// export const getUsers = (currentPage: number = 1, pageSize: number = 20) => {
//  return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
// }
//
// // Users
// export const deleteUsers = (us: UserType) => {
//  return instance.delete(`follow/${us.id}`).then(response => response.data)
// }
//
// export const postUsers = (us: UserType) => {
//  return instance.post(`follow/${us.id}`).then(response => response.data)
// }
//
// // ProfileContainer
// export const getProfile = (userId: string) => {
//  return instance.get(`profile/` + userId)
// }

