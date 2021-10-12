import {usersAPI} from "../api/api";
import {Dispatch} from "redux";

const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA"

type InitialAuthStateType = {
    id: string
    email: string
    login: string
    isAuthorized: boolean
}

type AuthAllActionType = SetAuthUserDataType

export type DataType = {
    id: string
    email: string
    login: string

}

type SetAuthUserDataType = {
    type: "SET_AUTH_USER_DATA"
    data: DataType
}


const InitialAuthState: InitialAuthStateType = {
    id: "",
    email: "",
    login: "",
    isAuthorized: false,
}

export const authorizationReducer = (state: InitialAuthStateType = InitialAuthState,
                                     action: AuthAllActionType): InitialAuthStateType => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuthorized: true,
            }
        default:
            return state
    }
}

export const setAuthUserData = (data: DataType): SetAuthUserDataType => ({
    type: SET_AUTH_USER_DATA, data,
})

export const loginHeaderThunkCreator = () => {
    return (dispatch: Dispatch) => {
        usersAPI.getHeaderLogin().then(response => {
            if (response.resultCode === 0) {
                dispatch(setAuthUserData(response.data))
            }
        })
    }
}