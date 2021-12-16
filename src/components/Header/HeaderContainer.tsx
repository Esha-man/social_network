
import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {isAuthorizedUserTC} from "../../redux/authorization-reducer";
import {compose} from "redux";



type MapStateToPropsType = {
    login: string
    isAuthorized: boolean
}

type MapDispatchToPropsType = {
    isAuthorizedUserTC: () => void
}

export type HeaderContainerType = MapStateToPropsType & MapDispatchToPropsType


class HeaderContainer extends React.Component<HeaderContainerType> {


    render() {
        return (
            <>
                <Header {...this.props}
                        login={this.props.login}
                        isAuthorized={this.props.isAuthorized}
                />
            </>
        )
    }
}

const mapStateToProps = (state: RootStateType): MapStateToPropsType => ({
    login: state.authorization.login,
    isAuthorized: state.authorization.isAuthorized

})

export default compose<React.ComponentType>(
    connect(mapStateToProps)
) (HeaderContainer)

// export default compose<React.ComponentType>(
//     connect(mapStateToProps, {isAuthorizedUserTC})
// ) (HeaderContainer)





