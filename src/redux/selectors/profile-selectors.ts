import {RootStateType} from "../redux-store";


export const getProfileUserSelector = (state: RootStateType) => {
    return state.profile.profileUser
}
export const getStatusSelector = (state: RootStateType) => {
    return state.profile.status
}
export const getMyUserIdSelector = (state: RootStateType) => {
    return state.authorization.id
}
export const getIsAuthorizedSelector = (state: RootStateType) => {
    return state.authorization.isAuthorized
}
export const getContactsSelector = (state: RootStateType) => {
    return state.profile.profileUser.contacts
}

