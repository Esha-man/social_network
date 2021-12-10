import {Dispatch} from "redux";
import { ThunkAction } from "redux-thunk";
import {authorizationAPI, LoginType} from "../api/api";
import {AllActionsType, RootStateType} from "./redux-store";


const InitialAuthState: InitialAuthStateType = {
    id: "",
    email: "",
    login: "",
    isAuthorized: false,
}

export const authorizationReducer = (state: InitialAuthStateType = InitialAuthState,
                                     action: AuthAllActionType): InitialAuthStateType => {
    switch (action.type) {
        case "AUTHORIZATION/SET_AUTH_USER_DATA":
            return {
                ...state,
                ...action.payload,
                // isAuthorized: true,
            }

        default:
            return state
    }
}

type ThunkType = ThunkAction<void, RootStateType, unknown, AllActionsType>

export const setAuthUserData = (id: string, email: string, login: string, isAuthorized: boolean) => ({
    type: "AUTHORIZATION/SET_AUTH_USER_DATA", payload: {id, email, login, isAuthorized}
} as const)
// export const loginization = (loginParams: LoginType) => (
//     {type: "AUTHORIZATION/LOGIN", loginParams} as const
// )

export const isAuthorizedUserTC = () => (dispatch: Dispatch) => {
    authorizationAPI.me()
        .then(response => {
            if (response.resultCode === 0) {
                let {id, email, login} = response.data
                dispatch(setAuthUserData(id, email, login, true))
            }
        })
}

export const loginTC = (email: string, password: string, rememberMe: boolean): ThunkType =>

    (dispatch) => {
        authorizationAPI.login(email, password, rememberMe)
            .then(response => {
                if (response.resultCode === 0) {
                    dispatch(isAuthorizedUserTC())
                }
            })
    }
export const logOutTC = () =>
    (dispatch: Dispatch) => {
        authorizationAPI.logOut()
            .then(response => {
                if (response.resultCode === 0) {
                    dispatch(setAuthUserData("", "", "", false))
                }
            })
    }


type AuthAllActionType = ReturnType<typeof setAuthUserData>

type InitialAuthStateType = {
    id: string
    email: string
    login: string
    isAuthorized: boolean
}

export type DataType = {
    id: string
    email: string
    login: string
}


// type LoginizationActionType = ReturnType<typeof loginization>