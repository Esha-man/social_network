import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {RootStoreType} from "../../redux/redux-store";
import {DataType, setAuthUserData} from "../../redux/authorization-reducer";


type MapStateToPropsType = {
    login: string
    isAuthorized: boolean
}

type MapDispatchToPropsType = {
    setAuthUserData: (data: DataType) => void
}

type HeaderContainerType = MapStateToPropsType & MapDispatchToPropsType


class HeaderContainer extends React.Component<HeaderContainerType> {
    componentDidMount() {
        axios
            .get("https://social-network.samuraijs.com/api/1.0/auth/me", {
                withCredentials: true
            })
            .then(response => {
                if (response.data.resultCode === 0) {
                    this.props.setAuthUserData(response.data.data)
                }
            })
    }

    render() {
        return (
            <div>
                <Header {...this.props}
                        login={this.props.login}
                        isAuthorized={this.props.isAuthorized}
                />
            </div>
        )
    }
}

const mapStateToProps = (state: RootStoreType): MapStateToPropsType => ({
    login: state.authorization.login,
    isAuthorized: state.authorization.isAuthorized

})

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)