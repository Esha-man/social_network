import axios from "axios";





const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {"api-key": "de66d353-a705-4b5f-bcd1-8006ed2d9ab2"},
})

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 20) { // User
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    deleteUsers(userId: number) { //unfollow (User)
        return instance.delete(`follow/${userId}`).then(response => response.data)
    },
    postUsers(userId: number) { //follow (User)
        return instance.post(`follow/${userId}`).then(response => response.data)
    },
    getProfile(userId: string) { // ProfileContainer
        console.warn("Obsolete method. Please use profileAPI object")
        return profileAPI.getProfile(userId)
    },
    // getHeaderLogin() { // Header Login-button
    //     return instance.get("auth/me").then(response => response.data)
    // }
}

export const profileAPI = {

    getProfile(userId: string) { // ProfileContainer
        return instance.get(`profile/` + userId)
    },
    getStatus(userId: string) { // ProfileContainer
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status: string) { // Нет userId, т.к. обновляем статус лолько у себя самого
        return instance.put(`profile/status`, {status: status})
    },
}

export const authorizationAPI = {
    getHeaderLogin() { // Header Login-button
        return instance.get("auth/me").then(response => response.data)
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

