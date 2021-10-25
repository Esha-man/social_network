import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {RootStoreType} from "../../redux/redux-store";
import {loginHeaderThunkCreator} from "../../redux/authorization-reducer";
import {compose} from "redux";



type MapStateToPropsType = {
    login: string
    isAuthorized: boolean
}

type MapDispatchToPropsType = {
    // setAuthUserData: (data: DataType) => void
    loginHeaderThunkCreator: () => void
}

type HeaderContainerType = MapStateToPropsType & MapDispatchToPropsType


class HeaderContainer extends React.Component<HeaderContainerType> {
    componentDidMount() {
        this.props.loginHeaderThunkCreator()
    }

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

const mapStateToProps = (state: RootStoreType): MapStateToPropsType => ({
    login: state.authorization.login,
    isAuthorized: state.authorization.isAuthorized

})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {loginHeaderThunkCreator})
)
(HeaderContainer)