import React from "react";


import {newStatePostAC, initialStateProfileReducerType} from "../../../redux/profile-reducer"
import {MyPosts} from "./MyPosts";
import {RootStoreType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {NewDialogsPostAC} from "../../../redux/dialogs-reducer";
import {withAuthRedirectHOC} from "../../../hoc/withAuthRedirectHOC";


type MapStateToPropsType = {
    profile: initialStateProfileReducerType
}

type MapDispatchToPropsType = {
    newPost: (textarea: string) => void
    // changeTextareaHandler: (text: string) => void
}


export type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: RootStoreType) => {
    return {
        profile: state.profile
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {

    return {
        newPost: (textarea: string) => {
            dispatch(newStatePostAC(textarea))
        }
    }
}

export const MyPostsContainer = compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirectHOC
)(MyPosts)


// type MapStateToPropsType = {
//     profile: initialStateProfileReducerType
// }
//
// type MapDispatchToPropsType = {
//     newPost: ()=> void
//     changeTextareaHandler: (text: string)=> void
// }
// export type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType
//
// const mapStateToProps = (state: RootStoreType) => {
//     return {
//         profile: state.profile
//     }
// }
//
// export const MyPostsContainer = compose<React.ComponentType>(
//     connect(mapStateToProps, {newPost: newStatePostAC, changeTextareaHandler: ChangeNewTextCallbackAC})
// )
// (MyPosts)
