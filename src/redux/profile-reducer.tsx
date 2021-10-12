import {v1} from "uuid";
import {AllActionsType} from "./redux-store";
import {Dispatch} from "redux";
import {usersAPI} from "../api/api";


export type MyPostsType = {
    id: string
    likes: number
    post: string
}

export type initialStateProfileReducerType = {
    myPostsData: Array<MyPostsType>
    textAreaValue: string
    profileUser: string
}

type NewStatePostType = {
    type: "NEW-STATE-POST"
}
type ChangeNewTextCallbackType = {
    type: "CHANGE-NEW-TEXT-CALLBACK"
    textProfile: string
}
type SetProfileUserType = {
    type: "SET_PROFILE_USER"
    profileUser: string
}

export type ProfileActionsType = NewStatePostType |
    ChangeNewTextCallbackType | SetProfileUserType

const NEW_STATE_POST = "NEW-STATE-POST"
const CHANGE_NEW_TEXT_CALLBACK = "CHANGE-NEW-TEXT-CALLBACK"
const SET_PROFILE_USER = "SET_PROFILE_USER"

let initialState: initialStateProfileReducerType = {
    myPostsData: [
        {id: v1(), likes: 2, post: "Hello!"},
        {id: v1(), likes: 7, post: "What your name?"},
        {id: v1(), likes: 5, post: "Go! Go! Go!"},
        {id: v1(), likes: 4, post: "Hi"},
        {id: v1(), likes: 2, post: "Hi"},
        {id: v1(), likes: 3, post: "Hi"},
    ],
    textAreaValue: "",
    profileUser: "",
}


export const profileReducer = (state: initialStateProfileReducerType = initialState,
                               action: AllActionsType): initialStateProfileReducerType => {

    switch (action.type) {
        case NEW_STATE_POST:
            const newPostGen: MyPostsType = {id: v1(), likes: 666, post: state.textAreaValue}
            return {
                ...state,
                myPostsData: [...state.myPostsData, newPostGen],
                textAreaValue: "",
            }

        case CHANGE_NEW_TEXT_CALLBACK:
            return {
                ...state,
                textAreaValue: action.textProfile
            }
        case SET_PROFILE_USER:
            return {
                ...state,
                profileUser: action.profileUser
            }
        default:
            return state
    }

}

export const newStatePostAC = (): NewStatePostType => {
    return {
        type: NEW_STATE_POST
    }
}
export const ChangeNewTextCallbackAC = (text: string): ChangeNewTextCallbackType => {
    return {
        type: CHANGE_NEW_TEXT_CALLBACK, textProfile: text
    }
}
export const SetProfileUserAC = (profileUser: string): SetProfileUserType => {
    return {
        type: SET_PROFILE_USER, profileUser
    }
}

export  const getProfileThunkCreator = (userId: string) => {
  return (dispatch: Dispatch) => {
      usersAPI.getProfile(userId).then(response => {
          dispatch(SetProfileUserAC(response.data))
      })
  }
}