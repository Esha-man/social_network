import {Dispatch} from "redux";
import { ThunkDispatch} from "redux-thunk";
import {authorizationAPI} from "../api/api";
import {AllActionsType, RootStateType} from "./redux-store";


const InitialAuthState: InitialAuthStateType = {
    id: "",
    email: "",
    login: "",
    isAuthorized: false,
    serverError: null,
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
        case "AUTHORIZATION/SET-SERVER-ERROR":
            return {
                ...state,
                serverError: action.error
            }
        default:
            return state
    }
}

export const setAuthUserData = (id: string, email: string, login: string, isAuthorized: boolean) => ({
    type: "AUTHORIZATION/SET_AUTH_USER_DATA", payload: {id, email, login, isAuthorized}
} as const)

export const setServerError = (error: string | null) =>
    ({type: "AUTHORIZATION/SET-SERVER-ERROR", error} as const)

export const isAuthorizedUserTC = () => async (dispatch: Dispatch) => {
   let response = await authorizationAPI.me()
            if (response.resultCode === 0) {
                let {id, email, login} = response.data
                dispatch(setAuthUserData(id, email, login, true))
            }
}

export const loginTC = (email: string, password: string, rememberMe: boolean) =>
   async (dispatch: ThunkDispatch<RootStateType, unknown, AllActionsType> ) => {
       let response = await authorizationAPI.login(email, password, rememberMe)

                if (response.resultCode === 0) {
                    dispatch(isAuthorizedUserTC())
                } else {
                    if (response.messages.length) {
                        dispatch(setServerError(response.messages[0]))

                    }
                }

    }

export const logOutTC = () => async (dispatch: Dispatch) => {
       let response = await  authorizationAPI.logOut()
                if (response.resultCode === 0) {
                    dispatch(setAuthUserData("", "", "", false))
                }
    }

export type AuthAllActionType = SetAuthUserDataActionType | SetErrorActionType
type SetAuthUserDataActionType = ReturnType<typeof setAuthUserData>
type SetErrorActionType = ReturnType<typeof setServerError>


export type InitialAuthStateType = {
    id: string
    email: string
    login: string
    isAuthorized: boolean
    serverError: string | null
}

export type DataType = {
    id: string
    email: string
    login: string
}


