import {NewDialogsPostAC, InitialStateDialogType} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";

import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {RootStateType} from "../../redux/redux-store";
import {withAuthRedirectHOC} from "../../hoc/withAuthRedirectHOC";


type MapStatePropsType = {
    dialogs: InitialStateDialogType
}

type MapDispatchPropsType = {
    addDialog: (textarea: string) => void
}

export type DialogPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        dialogs: state.dialogs,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {

    return {
        addDialog: (textarea: string) => {
            dispatch(NewDialogsPostAC(textarea))
        }
    }
}

export const DialogsContainer = compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirectHOC
)(Dialogs)


//
// export { DialogsContainer as default } from "./DialogsContainer";

