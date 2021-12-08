import {NewDialogsPostAC, InitialStateDialogType} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";

import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {RootStoreType} from "../../redux/redux-store";
import {withAuthRedirectHOC} from "../../hoc/withAuthRedirectHOC";


type MapStatePropsType = {
    dialogs: InitialStateDialogType
}

type MapDispatchPropsType = {
    // textValueChange: (text: string) => void
    addDialog: (textarea: string) => void
}

export type DialogPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: RootStoreType): MapStatePropsType => {
    return {
        dialogs: state.dialogs,
        // isAuth: state.authorization.isAuthorized,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {

    return {
        // textValueChange: (text: string) => {
        //     dispatch(CallbackDialogsAC(text))
        // },
        addDialog: (textarea: string) => {
            dispatch(NewDialogsPostAC(textarea))
        }
    }
}

export const DialogsContainer = compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirectHOC
)(Dialogs)

// const mapStateToProps = (state: RootStoreType): MapStatePropsType => {
//     return {
//         dialogs: state.dialogs,
//         // isAuth: state.authorization.isAuthorized,
//
//     }
// }
//
// const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
//
//     return {
//         textValueChange: (text: string) => {
//             dispatch(CallbackDialogsAC(text))
//         },
//         addDialog: (dialogs) => {
//             dispatch(NewDialogsPostAC(dialogs.newPostDialogs))
//         }
//     }
// }
//
// export const DialogsContainer = compose<React.ComponentType>(
//     connect(mapStateToProps, mapDispatchToProps),
//     withAuthRedirectHOC
// )(Dialogs)



