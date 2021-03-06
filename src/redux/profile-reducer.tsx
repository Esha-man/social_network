import {v1} from "uuid";
import {AllActionsType} from "./redux-store";
import {Dispatch} from "redux";
import {GetProfileUser, profileAPI, UserContactsType, usersAPI} from "../api/api";




let initialState: initialStateProfileReducerType = {
    myPostsData: [
        {id: v1(), likes: 2, post: "Hello!"},
        {id: v1(), likes: 7, post: "What your name?"},
        {id: v1(), likes: 5, post: "Go! Go! Go!"},
        {id: v1(), likes: 4, post: "Hi"},
    ],
    profileUser: {
        userId: 0,
        lookingForAJob: false,
        lookingForAJobDescription: "",
        fullName: "",
        contacts: {
            github: null,
            vk: null,
            facebook: null,
            instagram: null,
            twitter: null,
            website: null,
            youtube: null,
            mainLink: null,
        },
        photos: {
            small: null,
            large: null,
        }
    },
    status: "",
    // contacts: [],
}


export const profileReducer = (state: initialStateProfileReducerType = initialState,
                               action: AllActionsType): initialStateProfileReducerType => {

    switch (action.type) {
        case "PROFILE-REDUCER/NEW-STATE-POST":
            const newPost: MyPostsType = {id: v1(), likes: 6, post: action.text}
            return {
                ...state,
                myPostsData: [...state.myPostsData, newPost],
            }
        case "PROFILE-REDUCER/SET_PROFILE_USER":
            return {
                ...state,
                profileUser: action.profileUser
            }
        case "PROFILE-REDUCER/SET_STATUS":
            return {
                ...state,
                status: action.status
            }
        case "PROFILE-REDUCER/GET-CONTACTS":
            return {
                ...state,
                profileUser: {...state.profileUser, contacts: action.contacts},
            }
        case "PROFILE-REDUCER/SAVE-PHOTO":
            return {
                ...state,
                profileUser: {...state.profileUser, photos: action.file},
            }
        default:
            return state
    }

}

export const newStatePostAC = (text: string): NewStatePostType => {
    return {
        type: "PROFILE-REDUCER/NEW-STATE-POST", text
    }
}

export const SetProfileUserAC = (profileUser: GetProfileUser): SetProfileUserType => {
    return {
        type: "PROFILE-REDUCER/SET_PROFILE_USER", profileUser
    }
}

export const setStatusAC = (status: string): SetStatusType => {
    return {
        type: "PROFILE-REDUCER/SET_STATUS", status
    }
}

const getContactsAC = (contacts: UserContactsType) => (
    {type: "PROFILE-REDUCER/GET-CONTACTS", contacts} as const
)

const savePhotoAC = (file: any) => (
    {type: "PROFILE-REDUCER/SAVE-PHOTO", file} as const
)


export const getProfileThunkCreator = (userId: string) => async (dispatch: Dispatch) => {
      let response = await usersAPI.getProfile(userId)
            dispatch(SetProfileUserAC(response.data))
            dispatch(getContactsAC(response.data.contacts))

    }


export const getStatusThunkCreator = (userId: string) =>  async (dispatch: Dispatch) => {
        let response = await  profileAPI.getStatus(userId)
            if (response.data) {
                dispatch(setStatusAC(response.data))
            } else {
                return ""
            }
}

export const updateStatusThunkCreator = (status: string) => async (dispatch: Dispatch) => {
    let response = await profileAPI.updateStatus(status)
            if (response.data.resultCode === 0) {
                dispatch(setStatusAC(status))
            }
    }

export const getContactsThunkCreator = (userId: string) => async (dispatch: Dispatch) => {
        let response = await  profileAPI.getProfile(userId)
            if (response.data) {
                dispatch(getContactsAC(response.data.contacts))
            }

}
export const savePhotoTC = (file: any) => async (dispatch: Dispatch) => {
        let response = await profileAPI.savePhoto(file)
            if (response.data) {
                dispatch(savePhotoAC(response.data.data.photos))
            }

}




export type MyPostsType = {
    id: string
    likes: number
    post: string
}

export type initialStateProfileReducerType = {
    myPostsData: Array<MyPostsType>
    profileUser: GetProfileUser
    status: string
}


type NewStatePostType = {
    type: "PROFILE-REDUCER/NEW-STATE-POST"
    text: string
}
type ChangeNewTextCallbackType = {
    type: "PROFILE-REDUCER/CHANGE-NEW-TEXT-CALLBACK"
    textProfile: string
}
type SetProfileUserType = {
    type: "PROFILE-REDUCER/SET_PROFILE_USER"
    profileUser: GetProfileUser
}


type SetStatusType = {
    type: "PROFILE-REDUCER/SET_STATUS"
    status: string
}
type GetContactsType = ReturnType<typeof getContactsAC>
type SavePhotoActionType = ReturnType<typeof savePhotoAC>

export type ProfileActionsType = NewStatePostType
    | ChangeNewTextCallbackType
    | SetProfileUserType
    | SetStatusType
    | GetContactsType
    | SavePhotoActionType