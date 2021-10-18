import React from "react";


import {newStatePostAC, ChangeNewTextCallbackAC, initialStateProfileReducerType} from "../../../redux/profile-reducer"
import {MyPosts} from "./MyPosts";
import {RootStoreType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {compose} from "redux";



type MapStateToPropsType = {
    profile: initialStateProfileReducerType
}

type MapDispatchToPropsType = {
    newPost: ()=> void
    changeTextareaHandler: (text: string)=> void
}
export type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: RootStoreType) => {
    return {
        profile: state.profile
    }
}

export const MyPostsContainer = compose<React.ComponentType>(
    connect(mapStateToProps, {newPost: newStatePostAC, changeTextareaHandler: ChangeNewTextCallbackAC})
)
(MyPosts)