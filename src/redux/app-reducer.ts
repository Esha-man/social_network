import {Dispatch} from "redux"
import {isAuthorizedUserTC} from "./authorization-reducer"
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AllActionsType, RootStateType} from "./redux-store";


const initialAppState: InitialAppState = {
    initialized: false
}

export const appReducer = (state: InitialAppState = initialAppState,
                           action: AppAllActionType): InitialAppState => {
    switch (action.type) {
        case "APP/SET-INITIALIZED":
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}


export const setAppInitialized = () => ({type: "APP/SET-INITIALIZED"} as const)

export const initializeAppTC = () =>
    (dispatch: ThunkDispatch<RootStateType, unknown, AllActionsType>) => {
    let promise = dispatch(isAuthorizedUserTC())
    Promise.all([promise]).then(() => dispatch(setAppInitialized()))
}


type ThunkType = ThunkAction<void, RootStateType, unknown, AllActionsType>

export type AppAllActionType = SetAppInitializedActionType
type SetAppInitializedActionType = ReturnType<typeof setAppInitialized>

type InitialAppState = {
    initialized: boolean
}
