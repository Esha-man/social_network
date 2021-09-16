import {v1} from "uuid";

type LocationType = {
    country: string
    city: string
}

export type UserType = {
    name: string
    id: string
    uniqueUrlName: string | null
    photos: {
        small: string | null
        large: string | null
    },
    status: string
    followed: boolean

}
export type InitialStateUsersType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean

}
//--- action creators types ---//

type FollowActionType = {
    type: "FOLLOW"
    id: string
}
type UnFollowAcnionType = {
    type: "UNFOLLOW"
    id: string
}
type SetNewUsersAcnionType = {
    type: "SET-USERS"
    users: Array<UserType>
}
type SetCurrentPageAcnionType = {
    type: "SET-CURRENT-PAGE"
    page: number
}
type SetTotalUsersCountActionType = {
    type: "SET-TOTAL-USERS-COUNT"
    totalCount: number
}
type SpinnerLoaderActionType = {
    type: "SPINNER-LOADER-FETCHING"
    isFetching: boolean
}
export type UsersReducerActionType = FollowActionType |
    UnFollowAcnionType | SetNewUsersAcnionType |
    SetCurrentPageAcnionType | SetTotalUsersCountActionType |
    SpinnerLoaderActionType

//--- action creators types end ---//
const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET-USERS"
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE"
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT"
const SPINNER_LOADER_FETCHING = "SPINNER-LOADER-FETCHING"

export const initialStateUsers: InitialStateUsersType = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,


}

export const usersReducer = (state: InitialStateUsersType = initialStateUsers, action: UsersReducerActionType) => {
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
                return {...state, users: [...action.users], ...state.users}
            }
        default:
            return state
    }
}

export const followAC = (id: string): FollowActionType => (
    {type: FOLLOW, id}
)
export const unFollowAC = (id: string): UnFollowAcnionType => (
    {type: UNFOLLOW, id}
)
export const setNewUsersAC = (users: Array<UserType>): SetNewUsersAcnionType => (
    {type: SET_USERS, users}
)

export const setCurrentPageAC = (page: number): SetCurrentPageAcnionType => (
    {type: SET_CURRENT_PAGE, page}
)
export const setTotalUsersCountAC = (totalCount: number): SetTotalUsersCountActionType => (
    {type: SET_TOTAL_USERS_COUNT, totalCount}
)
export const spinnerLoaderFetchingAC = (isFetching: boolean): SpinnerLoaderActionType => (
    {type: SPINNER_LOADER_FETCHING, isFetching}
)