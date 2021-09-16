
import {NewDialogsPostAC, CallbackDialogsAC, InitialStateDialogType,} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";

import {connect} from "react-redux";
import {Dispatch} from "redux";
import {RootStoreType} from "../../redux/redux-store";



type MapStatePropsType = {
    dialogs: InitialStateDialogType
}

type MapDispatchPropsType = {
    textValueChange: (text: string) => void
    addDialog: (text: InitialStateDialogType) => void
}

export type DialogPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: RootStoreType): MapStatePropsType => {
    return {
        dialogs: state.dialogs

    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {


    return {
        textValueChange: (text: string) => {
            //debugger
            dispatch(CallbackDialogsAC(text))
        },
        addDialog: (dialogs) => {
           // debugger
            dispatch(NewDialogsPostAC(dialogs.newPostDialogs))
            // dialogs.newPostDialogs = ''
        }
    }
}


export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);