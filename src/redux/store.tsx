import React from "react";
// import {v1} from "uuid";
// import {dialogsReducer} from "./dialogs-reducer";
// import {profileReducer} from "./profile-reducer";
// import {sidebarReducer} from "./sidebar-reducer";


// Типизация

// export type DialogsType = {
//     id: string
//     name: string
//     sex: string
// }

// export type MessageType = {
//     id: string
//     message: string
//
// }

// export type MyPostsType = {
//     id: string
//     likes: number
//     post: string
// }

// export type FriendsType = {
//     id: string
//     name: string
//     sex: string
// }
//
// export type SidebarContentType = {
//     friends: Array<FriendsType>
// }

// export type PostsType = {
//     dialogsData: Array<DialogsType>
//     messageData: Array<MessageType>
//     newPostDialogs: string
// }

// export type ProfileType = {
//     myPostsData: Array<MyPostsType>
//     textAreaValue: string
// }

// export type RootType = {
//     // dialogs: PostsType
//     profile: ProfileType
//     sidebarContent: SidebarContentType
//
// }

// export type StoreType = {
//     _state: RootType
//     getState: () => RootType
//     subscribe: (observer: () => void) => void
//     rerenderEntireTree: () => void

    // newStatePost: () => void
    // changeNewTextCallback: (newText: string) => void
    // newDialogsPost: (text: string) => void
    // callbackDialogs: (textDial: string) => void

//     dispatch: (action: AllActionsType) => void
// }

// export type NewStatePostType =  {
//     type: "NEW-STATE-POST"
// }
// export type ChangeNewTextCallbackType = {
//     type: "CHANGE-NEW-TEXT-CALLBACK"
//     textProfile: string
// }
// export type NewDialogsPostType = {
//     type: "NEW-DIALOGS-POST"
//     text: string
// }
// export type CallbackDialogsType = {
//     type: "CALLBACK-DIALOGS"
//     textDialogs: string
// }
// export type AllActionsType = NewStatePostType | ChangeNewTextCallbackType | NewDialogsPostType | CallbackDialogsType

// <-- Типизация - конец

// export const store: StoreType = {
//     _state: {
//         dialogs: {
//             dialogsData: [
//                 {id: v1(), name: "Ivan", sex: "boy"},
//                 {id: v1(), name: "Petr", sex: "boy"},
//                 {id: v1(), name: "Masha", sex: "girl"},
//                 {id: v1(), name: "Vasya", sex: "boy"},
//                 {id: v1(), name: "Klava", sex: "girl"},
//                 {id: v1(), name: "Timur", sex: "boy"},
//             ],
//             messageData: [
//                 {id: v1(), message: "Hey"},
//                 {id: v1(), message: "How are you?"},
//                 {id: v1(), message: "Have a nice day!"},
//                 {id: v1(), message: "AAAAAAAAAA"},
//                 {id: v1(), message: "Hi"},
//                 {id: v1(), message: "Hi"},
//             ],
//             newPostDialogs: "",
//         },
//
//         profile: {
//             myPostsData: [
//                 {id: v1(), likes: 2, post: "Hello!"},
//                 {id: v1(), likes: 7, post: "What your name?"},
//                 {id: v1(), likes: 5, post: "Go! Go! Go!"},
//                 {id: v1(), likes: 4, post: "Hi"},
//                 {id: v1(), likes: 2, post: "Hi"},
//                 {id: v1(), likes: 3, post: "Hi"},
//             ],
//             textAreaValue: ""
//         },
//
//         sidebarContent: {
//             friends: [
//                 {id: v1(), name: "Kolya", sex: "boy"},
//                 {id: v1(), name: "Ilya", sex: "boy"},
//                 {id: v1(), name: "Anya", sex: "girl"},
//             ]
//         }
//     },
//
//     getState() {
//         return this._state
//     },
//     rerenderEntireTree() {
//         console.log("rerender")
//     },
//     subscriber(observer: () => void) {
//         this.rerenderEntireTree = observer
//     },
//
//     /// ---- dispatch ---- ///
//
//     dispatch(action: AllActionsType) {
//
//         this._state.dialogs = dialogsReducer(this._state.dialogs, action)
//         this._state.profile =  profileReducer(this._state.profile, action)
//         this._state.sidebarContent = sidebarReducer(this._state.sidebarContent, action)
//
//         this.rerenderEntireTree()
//
//     }
//
// }
