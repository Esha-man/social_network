import {applyMiddleware, createStore, combineReducers} from "redux"
import {ProfileActionsType, profileReducer} from "./profile-reducer";
import {CallbackDialogsType, dialogsReducer, NewDialogsPostType} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {usersReducer, UsersReducerActionType} from "./users-reducer";
import {authorizationReducer} from "./authorization-reducer";
import thunk from 'redux-thunk';

export type AllActionsType = ProfileActionsType | NewDialogsPostType
    | CallbackDialogsType | UsersReducerActionType


 const rootReducer = combineReducers(
     {
         dialogs: dialogsReducer,
         profile: profileReducer,
         sidebarContent: sidebarReducer,
         usersPage: usersReducer,
         authorization: authorizationReducer,

     }
 );

export type RootStoreType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunk))


// @ts-ignore
window.store = store


