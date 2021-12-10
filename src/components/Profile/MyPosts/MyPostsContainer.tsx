import React from "react";

import {newStatePostAC, initialStateProfileReducerType} from "../../../redux/profile-reducer"
import {MyPosts} from "./MyPosts";
import {RootStateType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {withAuthRedirectHOC} from "../../../hoc/withAuthRedirectHOC";


type MapStateToPropsType = {
    profile: initialStateProfileReducerType
}

type MapDispatchToPropsType = {
    newPost: (textarea: string) => void
}


export type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: RootStateType) => {
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

