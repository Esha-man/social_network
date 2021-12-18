import {v1} from "uuid";
import {AllActionsType} from "./redux-store";
import {Dispatch} from "redux";
import {GetProfileUser, profileAPI, UserContactsType, usersAPI} from "../api/api";


export type MyPostsType = {
    id: string
    likes: number
    post: string
}

export type initialStateProfileReducerType = {
    myPostsData: Array<MyPostsType>
    profileUser: GetProfileUser
    status: string
    // contacts: string[]
}
// export type initialStateProfileReducerType = {
//     myPostsData: Array<MyPostsType>
//     profileUser: string
//     status: string
// }

type NewStatePostType = {
    type: "NEW-STATE-POST"
    text: string
}
type ChangeNewTextCallbackType = {
    type: "CHANGE-NEW-TEXT-CALLBACK"
    textProfile: string
}
type SetProfileUserType = {
    type: "SET_PROFILE_USER"
    profileUser: GetProfileUser
}
//     type SetProfileUserType = {
//     type: "SET_PROFILE_USER"
//     profileUser: string
// }

type SetStatusType = {
    type: "SET_STATUS"
    status: string
}
type GetContactsType = ReturnType<typeof getContactsAC>

export type ProfileActionsType = NewStatePostType
    | ChangeNewTextCallbackType
    | SetProfileUserType
    | SetStatusType
    | GetContactsType

const NEW_STATE_POST = "NEW-STATE-POST"
const CHANGE_NEW_TEXT_CALLBACK = "CHANGE-NEW-TEXT-CALLBACK"
const SET_PROFILE_USER = "SET_PROFILE_USER"
const SET_STATUS = "SET_STATUS"

let initialState: initialStateProfileReducerType = {
    myPostsData: [
        {id: v1(), likes: 2, post: "Hello!"},
        {id: v1(), likes: 7, post: "What your name?"},
        {id: v1(), likes: 5, post: "Go! Go! Go!"},
        {id: v1(), likes: 4, post: "Hi"},
        {id: v1(), likes: 2, post: "Hi"},
        {id: v1(), likes: 3, post: "Hi"},
    ],
    profileUser: {
        userId: 0,
        lookingForAJob: false,
        lookingForAJobDescription: "",
        fullName: "",
        contacts: {
            github: "",
            vk: "",
            facebook: "",
            instagram: "",
            twitter: "",
            website: "",
            youtube: "",
            mainLink: "",
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
        case NEW_STATE_POST:
            const newPost: MyPostsType = {id: v1(), likes: 6, post: action.text}
            return {
                ...state,
                myPostsData: [...state.myPostsData, newPost],
            }
        case SET_PROFILE_USER:
            return {
                ...state,
                profileUser: action.profileUser
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case "GET-CONTACTS":
            return {
                ...state,
                profileUser: {...state.profileUser, contacts: action.contacts},
            }
        default:
            return state
    }

}

export const newStatePostAC = (text: string): NewStatePostType => {
    return {
        type: NEW_STATE_POST, text
    }
}
// export const ChangeNewTextCallbackAC = (text: string): ChangeNewTextCallbackType => {
//     return {
//         type: CHANGE_NEW_TEXT_CALLBACK, textProfile: text
//     }
// }


export const SetProfileUserAC = (profileUser: GetProfileUser): SetProfileUserType => {
    return {
        type: SET_PROFILE_USER, profileUser
    }
}
// export const SetProfileUserAC = (profileUser: string): SetProfileUserType => {
//     return {
//         type: SET_PROFILE_USER, profileUser
//     }
// }

export const setStatusAC = (status: string): SetStatusType => {
    return {
        type: SET_STATUS, status
    }
}

const getContactsAC = (contacts: UserContactsType) => (
    {type: "GET-CONTACTS", contacts} as const
)
export const getProfileThunkCreator = (userId: string) => {
    return (dispatch: Dispatch) => {
        usersAPI.getProfile(userId).then(response => {
            dispatch(SetProfileUserAC(response.data))
            // dispatch(getContactsAC(response.data.contacts))
        })
    }
}

// export const getProfileThunkCreator = (userId: string) => {
//     return (dispatch: Dispatch) => {
//         usersAPI.getProfile(userId).then(response => {
//             dispatch(SetProfileUserAC(response.data))
//
//         })
//     }
// }

export const getStatusThunkCreator = (userId: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.getStatus(userId).then(response => {
            if (response.data) {
                dispatch(setStatusAC(response.data))
            } else {
                return ""
            }
        })
    }
}

export const updateStatusThunkCreator = (status: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.updateStatus(status).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatusAC(status))
            }
        })
    }
}

export const getContactsThunkCreator = (userId: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.getProfile(userId).then(response => {
            if (response.data) {
                dispatch(getContactsAC(response.data.contacts))
            }
        })
    }
}

