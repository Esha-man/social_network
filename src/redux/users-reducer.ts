import {Dispatch} from "redux";
import {usersAPI, UsersResponseType} from "../api/api";

//20163

export type UserType = {

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
// export type UserType = {
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


export type InitialStateUsersType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]

}
type FollowActionType = {
    type: "USERS_REDUCER/FOLLOW"
    id: number
}
type UnFollowAcnionType = {
    type: "USERS_REDUCER/UNFOLLOW"
    id: number
}
type SetNewUsersAcnionType = {
    type: "USERS_REDUCER/SET-USERS"
    users: Array<UserType>
}
type SetCurrentPageAcnionType = {
    type: "USERS_REDUCER/SET-CURRENT-PAGE"
    page: number
}
type SetTotalUsersCountActionType = {
    type: "USERS_REDUCER/SET-TOTAL-USERS-COUNT"
    totalCount: number
}
type SpinnerLoaderActionType = {
    type: "USERS_REDUCER/SPINNER-LOADER-FETCHING"
    isFetching: boolean
}
type FollowingInProgressActionType = {
    type: "USERS_REDUCER/FOLLOWING-IN-PROGRESS"
    isFetching: boolean
    id: number
}
export type UsersReducerActionType = FollowActionType |
    UnFollowAcnionType | SetNewUsersAcnionType |
    SetCurrentPageAcnionType | SetTotalUsersCountActionType |
    SpinnerLoaderActionType | FollowingInProgressActionType

//--- action creators types end ---//
const FOLLOW = "USERS_REDUCER/FOLLOW"
const UNFOLLOW = "USERS_REDUCER/UNFOLLOW"
const SET_USERS = "USERS_REDUCER/SET-USERS"
const SET_CURRENT_PAGE = "USERS_REDUCER/SET-CURRENT-PAGE"
const SET_TOTAL_USERS_COUNT = "USERS_REDUCER/SET-TOTAL-USERS-COUNT"
const SPINNER_LOADER_FETCHING = "USERS_REDUCER/SPINNER-LOADER-FETCHING"
const FOLLOWING_IN_PROGRESS = "USERS_REDUCER/FOLLOWING-IN-PROGRESS"

export const initialStateUsers: InitialStateUsersType = {
    users: [],
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],

}

export const usersReducer = (state: InitialStateUsersType = initialStateUsers,
                             action: UsersReducerActionType) => {
    switch (action.type) {
        case SPINNER_LOADER_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.page
            }
        }
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(el => {
                    if (el.id === action.id) {
                        return {...el, followed: true}
                    } else {
                        return el
                    }

                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(el => {
                    if (el.id === action.id) {
                        return {...el, followed: false}
                    } else {
                        return el
                    }
                })
            }
        }
        case SET_USERS: {
            return {
                ...state,
                users: [...action.users],
                // ...state.users
            }
        }
        case FOLLOWING_IN_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching ?
                    [...state.followingInProgress, action.id] :
                    state.followingInProgress.filter(id => id !== action.id)
            }
        }
        default:
            return state
    }
}

export const followAC = (id: number): FollowActionType => (
    {type: FOLLOW, id}
)
export const unFollowAC = (id: number): UnFollowAcnionType => (
    {type: UNFOLLOW, id}
)
export const setNewUsersAC = (users: Array<UsersResponseType>): SetNewUsersAcnionType => (
    {type: SET_USERS, users}
)
// export const setNewUsersAC = (users: Array<UserType>): SetNewUsersAcnionType => (
//     {type: SET_USERS, users}
// )

export const setCurrentPageAC = (page: number): SetCurrentPageAcnionType => (
    {type: SET_CURRENT_PAGE, page}
)
export const setTotalUsersCountAC = (totalCount: number): SetTotalUsersCountActionType => (
    {type: SET_TOTAL_USERS_COUNT, totalCount}
)
export const spinnerLoaderFetchingAC = (isFetching: boolean): SpinnerLoaderActionType => (
    {type: SPINNER_LOADER_FETCHING, isFetching}
)
export const followingInProgressAC = (isFetching: boolean, id: number): FollowingInProgressActionType => (
    {type: FOLLOWING_IN_PROGRESS, isFetching, id}
)

export const getUsersThunkCreator = (currentPage: number, pageSize: number) => async (dispatch: Dispatch) => {  // Thunk
        dispatch(spinnerLoaderFetchingAC(true))
        dispatch(setCurrentPageAC(currentPage))

    let response = await  usersAPI.getUsers(currentPage, pageSize)
            dispatch(spinnerLoaderFetchingAC(false))
            dispatch(setNewUsersAC(response.items))
            dispatch(setTotalUsersCountAC(response.totalCount))
}

export const changePageThunkCreator = (page: number, pageSize: number) => async (dispatch: Dispatch) => {  // Thunk
        dispatch(setCurrentPageAC(page))
        dispatch(spinnerLoaderFetchingAC(true))
    let response = await usersAPI.getUsers(pageSize)
            dispatch(spinnerLoaderFetchingAC(false))
            dispatch(setNewUsersAC(response.items))
}

export const unfollowUsersThunkCreator = (userId: number) => async (dispatch: Dispatch) => {

        dispatch(followingInProgressAC(true, userId))
    let response = await usersAPI.deleteUsers(userId)
            if (response.resultCode === 0) {
                dispatch(unFollowAC(userId))
            }
            dispatch(followingInProgressAC(false, userId))
}

export const followUsersThunkCreator = (userId: number) => async (dispatch: Dispatch) => {

        dispatch(followingInProgressAC(true, userId))
        let response = await  usersAPI.postUsers(userId)
            if (response.resultCode === 0) {
                dispatch(followAC(userId))
            }
            dispatch(followingInProgressAC(false, userId))
}
