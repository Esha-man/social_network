import React from "react";


import {newStatePostAC, ChangeNewTextCallbackAC, initialStateProfileReducerType} from "../../../redux/profile-reducer"
import {MyPosts} from "./MyPosts";


import {Dispatch, Store} from "redux";
import {RootStoreType} from "../../../redux/redux-store";
import {connect} from "react-redux";



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
// const mapDispatchToProps = (dispatch: Dispatch) => {
//     return {
//         newPost: ()=> {
//             dispatch(newStatePostAC())
//         },
//         changeTextareaHandler: (text: string)=> {
//             let action = ChangeNewTextCallbackAC(text)
//             dispatch(action)
//         }
//     }
// }

// export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export const MyPostsContainer = connect(mapStateToProps, {
    newPost: newStatePostAC,
    changeTextareaHandler: ChangeNewTextCallbackAC,
})(MyPosts)