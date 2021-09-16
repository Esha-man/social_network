import React from "react";


import {newStatePostAC, ChangeNewTextCallbackAC, initialStateProfileReducerType} from "../../../redux/profile-reducer"
import {MyPosts} from "./MyPosts";


import {Dispatch, Store} from "redux";
import {RootStoreType} from "../../../redux/redux-store";
import {connect} from "react-redux";


// type RootType = {
//     store: Store<RootStoreType>
// }


// export const dMyPostsContainer = (store: Store<RootStoreType>) => {

    // let profileStore = props.store.getState()
    //
    //
    // const newPost = () => {
    //     props.store.dispatch(newStatePostAC())
    //     profileStore.profile.textAreaValue = ""
    // }
    //
    // const changeTextareaHandler = (text: string) => {
    //
    //     let action = ChangeNewTextCallbackAC(text)
    //     props.store.dispatch(action)
    // }


//     return (
//         <StoreContext.Consumer>
//             {
//                 (store: Store<RootStoreType>) => {
//
//                     let profileStore = store.getState()
//
//
//                     const newPost = () => {
//                         store.dispatch(newStatePostAC())
//                         profileStore.profile.textAreaValue = ""
//                     }
//
//                     const changeTextareaHandler = (text: string) => {
//
//                         let action = ChangeNewTextCallbackAC(text)
//                         store.dispatch(action)
//                     }
//
//
//
//                     return <div>
//
//                         <MyPosts profile={profileStore.profile}
//                                  newPost={newPost}
//                                  changeTextareaHandler={changeTextareaHandler}
//                         />
//                     </div>
//                 }
//             }
//         </StoreContext.Consumer>
//     )
//
//
// }

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
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        newPost: ()=> {
            dispatch(newStatePostAC())
        },
        changeTextareaHandler: (text: string)=> {
            let action = ChangeNewTextCallbackAC(text)
            dispatch(action)
        }
    }

}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)