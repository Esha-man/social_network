import {v1} from "uuid";
import {AllActionsType} from "./redux-store";

export type DialogsType = {
    id: string
    name: string
    sex: string
}

export type MessageType = {
    id: string
    message: string
}

export type InitialStateDialogType = {
    dialogsData: Array<DialogsType>
    messageData: Array<MessageType>
    newPostDialogs: string
}

export type NewDialogsPostType = {
    type: "NEW-DIALOGS-POST"
    text: string
}
export type CallbackDialogsType = {
    type: "CALLBACK-DIALOGS"
    textDialogs: string
}

const NEW_DIALOGS_POST = "NEW-DIALOGS-POST"
const CALLBACK_DIALOGS = "CALLBACK-DIALOGS"

let initialState: InitialStateDialogType = {
    dialogsData: [
        {id: v1(), name: "Ivan", sex: "boy"},
        {id: v1(), name: "Petr", sex: "boy"},
        {id: v1(), name: "Masha", sex: "girl"},
        {id: v1(), name: "Vasya", sex: "boy"},
        {id: v1(), name: "Klava", sex: "girl"},
        {id: v1(), name: "Timur", sex: "boy"},
    ],
    messageData: [
        {id: v1(), message: "Hey"},
        {id: v1(), message: "How are you?"},
        {id: v1(), message: "Have a nice day!"},
        {id: v1(), message: "AAAAAAAAAA"},
        {id: v1(), message: "Hi"},
        {id: v1(), message: "Hi"},
    ],
    newPostDialogs: "",
}


export const dialogsReducer = (state: InitialStateDialogType = initialState, action: AllActionsType): InitialStateDialogType => {

    switch (action.type) {
        case NEW_DIALOGS_POST:

            const newPost: MessageType = {id: v1(), message: action.text}

            return {
                ...state,
                messageData: [...state.messageData, newPost],
                newPostDialogs: "",
            }

        case CALLBACK_DIALOGS:
            return {
                ...state,
                newPostDialogs: action.textDialogs
            }
        default:
            return state
    }

}


export const NewDialogsPostAC = (text: string): NewDialogsPostType => {

    return {
        type: NEW_DIALOGS_POST,
        text: text
    }
}

export const CallbackDialogsAC = (text: string): CallbackDialogsType => {

    return {
        type: CALLBACK_DIALOGS,
        textDialogs: text
    }
}

