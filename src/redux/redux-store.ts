import {createStore, combineReducers, Store} from "redux"
import {ChangeNewTextCallbackType, NewStatePostType, profileReducer} from "./profile-reducer";
import {CallbackDialogsType, dialogsReducer, NewDialogsPostType} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {usersReducer, UsersReducerActionType} from "./users-reducer";

export type AllActionsType = NewStatePostType | ChangeNewTextCallbackType | NewDialogsPostType | CallbackDialogsType | UsersReducerActionType


 const rootReducer = combineReducers(
     {
         dialogs: dialogsReducer,
         profile: profileReducer,
         sidebarContent: sidebarReducer,
         usersPage: usersReducer,

     }
 );

export type RootStoreType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)


// @ts-ignore
window.store = store


