
import {NewDialogsPostAC, CallbackDialogsAC, InitialStateDialogType,} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";

import {connect} from "react-redux";
import {Dispatch} from "redux";
import {RootStoreType} from "../../redux/redux-store";
import {withAuthRedirectHOC} from "../../hoc/withAuthRedirectHOC";



type MapStatePropsType = {
    dialogs: InitialStateDialogType
    // isAuth: boolean
}

type MapDispatchPropsType = {
    textValueChange: (text: string) => void
    addDialog: (text: InitialStateDialogType) => void
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
        textValueChange: (text: string) => {
            dispatch(CallbackDialogsAC(text))
        },
        addDialog: (dialogs) => {
            dispatch(NewDialogsPostAC(dialogs.newPostDialogs))
        }
    }
}

const AuthRedirectComponent = withAuthRedirectHOC(Dialogs)

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);
