import {applyMiddleware, createStore, combineReducers} from "redux"
import {ProfileActionsType, profileReducer} from "./profile-reducer";
import {CallbackDialogsType, dialogsReducer, NewDialogsPostType} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {usersReducer, UsersReducerActionType} from "./users-reducer";
import {AuthAllActionType, authorizationReducer} from "./authorization-reducer";
import thunk from 'redux-thunk';
import {AppAllActionType, appReducer} from "./app-reducer";
import { composeWithDevTools } from "redux-devtools-extension";

export type AllActionsType = ProfileActionsType
    | NewDialogsPostType
    | CallbackDialogsType
    | UsersReducerActionType
    | AuthAllActionType
    | AppAllActionType



 const rootReducer = combineReducers(
     {
         dialogs: dialogsReducer,
         profile: profileReducer,
         sidebarContent: sidebarReducer,
         usersPage: usersReducer,
         authorization: authorizationReducer,
         app: appReducer,

     }
 );

export type RootStateType = ReturnType<typeof rootReducer>

// const store = createStore(rootReducer, composeWithDevTools(
//     applyMiddleware(thunk),
// ));

export const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk),
));

// export const store = createStore(rootReducer, applyMiddleware(thunk)
// )


// @ts-ignore
// window.store = store


