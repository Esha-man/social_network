
import {v1} from "uuid";
import {AllActionsType} from "./redux-store";

export type FriendsType = {
    id: string
    name: string
    sex: string
}

export type initialStateSidebarReducerType = {
    friends: Array<FriendsType>
}
let initialState: initialStateSidebarReducerType = {
friends: [
    {id: v1(), name: "Kolya", sex: "boy"},
    {id: v1(), name: "Ilya", sex: "boy"},
    {id: v1(), name: "Anya", sex: "girl"},
]
}

export const sidebarReducer = (state: initialStateSidebarReducerType = initialState, action: AllActionsType): initialStateSidebarReducerType => {
    return state
}