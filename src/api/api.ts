import axios from "axios";





const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {"api-key": "a1254a8c-0530-4921-8e26-69272bb1af33"},
})

// type UserResponseType = {
//     name: string
//     id: number
//     uniqueUrlName: string | null
//     status: string
//     followed: boolean
//     photos: {
//         small: string | null
//         large: string | null
//     }
// }


// export const usersAPI = {
//     getUsers(currentPage: number = 1, pageSize: number = 20) { // User
//         return instance.get<UsersResponseType>(`users?page=${currentPage}&count=${pageSize}`)
//             .then(response => response.data)
//     },
//     deleteUsers(userId: number) { //unfollow (User)
//         return instance.delete<AuthResponseType>(`follow/${userId}`).then(response => response.data)
//     },
//     postUsers(userId: number) { //follow (User)
//         return instance.post(`follow/${userId}`).then(response => response.data)
//     },
//     getProfile(userId: string) { // ProfileContainer
//         console.warn("Obsolete method. Please use profileAPI object")
//         return profileAPI.getProfile(userId)
//     },
// }

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 20) { // User
        return instance.get<ItemUsersResponseType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    deleteUsers(userId: number) { //unfollow (User)
        return instance.delete<ResponseType>(`follow/${userId}`).then(response => response.data)
    },
    postUsers(userId: number) { //follow (User)
        return instance.post<ResponseType>(`follow/${userId}`).then(response => response.data)
    },
    getProfile(userId: string) { // ProfileContainer   ??????????????
        console.warn("Obsolete method. Please use profileAPI object")
        return profileAPI.getProfile(userId)
    },

}

export const profileAPI = {
    getProfile(userId: string) { // ProfileContainer
        return instance.get<GetProfileUser>(`profile/` + userId)
    },
    getStatus(userId: string) { // ProfileContainer
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status: string) { // Нет userId, т.к. обновляем статус лолько у себя самого
        return instance.put(`profile/status`, {status: status})
    },
}

export const authorizationAPI = {
    me() { // Header Login-button
        return instance.get("auth/me").then(response => response.data)
    },
    login(email: string, password: string, rememberMe: boolean = false) {
        return instance.post<ResponseType>("auth/login", {email, password, rememberMe})
            .then(response => response.data)
    },
    logOut() {
        return instance.delete<ResponseType>("auth/login")
            .then(response => response.data)
    }
}




export type LoginType = {
    email: string
    password: string
    rememberMe?: boolean
    captcha?: boolean
}
type ResponseType<D = {}> = {
    resultCode: number
    messages: string[]
    data: D
}

type ItemUsersResponseType = {
    items: Array<UsersResponseType>
    totalCount: number
    error: null
}

export type UsersResponseType = {
    name: string
    id: number
    uniqueUrlName: string | null
    status: string
    followed: boolean
    photos: {
        small: string | null
        large: string | null
    }
}


export type GetProfileUser = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: UserContactsType
    photos: {
        small: string | null
        large: string | null
    }
}
export type UserContactsType = {
    github: string | null
    vk: string | null
    facebook: string | null
    instagram: string | null
    twitter: string | null
    website: string | null
    youtube: string | null
    mainLink: string | null
}