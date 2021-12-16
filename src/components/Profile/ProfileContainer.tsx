import * as React from "react";
import {Profile} from "./Profile";
import {getProfileThunkCreator, getStatusThunkCreator, updateStatusThunkCreator} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {withAuthRedirectHOC} from "../../hoc/withAuthRedirectHOC";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";

type MapStateType = {
    profileUser: any
    status: string
    myUserId: string
    isAuthorized: boolean
}

type MapDispatchType = {
    // SetProfileUserAC: (userProfile: string) => void
    getProfileThunkCreator: (userId: string) => void
    getStatusThunkCreator: (userId: string) => void
    updateStatusThunkCreator: (status: string) => void
}

type ParamsType = {
    userId: string
}

type StateDispatchType = MapStateType & MapDispatchType

type PropsType = RouteComponentProps<ParamsType> & StateDispatchType

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.myUserId
            if (!userId) {
                this.props.history.push("/login")
            }
        }
        this.props.getProfileThunkCreator(userId)
        this.props.getStatusThunkCreator(userId)
        //дописать запрос статуса

    }

    render() {

        return (
            <div>
                <Profile {...this.props}
                         profileUser={this.props.profileUser}
                         status={this.props.status}
                         updateStatus={this.props.updateStatusThunkCreator}
                />
            </div>
        )
    }
}


const mapStateToProps = (state: RootStateType): MapStateType => {
    return {
        profileUser: state.profile.profileUser,
        status: state.profile.status,
        myUserId: state.authorization.id,
        isAuthorized: state.authorization.isAuthorized,
    }
}

export default compose<React.ComponentType>(
    // withAuthRedirectHOC,
    connect(mapStateToProps,
        {
            getProfileThunkCreator,
            getStatusThunkCreator,
            updateStatusThunkCreator
        }),
    withRouter
)(ProfileContainer)

// export const WithRouterDataContainerComponent = withRouter(ProfileContainer);
// export default withAuthRedirectHOC(connect(mapStateToProps,{getProfileThunkCreator}) (WithRouterDataContainerComponent));
