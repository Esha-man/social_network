import * as React from "react";
import {Profile} from "./Profile";
import {
    getContactsThunkCreator,
    getProfileThunkCreator,
    getStatusThunkCreator, savePhotoTC,
    updateStatusThunkCreator
} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";
import {GetProfileUser, UserContactsType} from "../../api/api";
import {
    getProfileUserSelector,
    getStatusSelector,
    getMyUserIdSelector,
    getIsAuthorizedSelector,
    getContactsSelector
} from "../../redux/selectors/profile-selectors";





type MapStateType = {
    profileUser: GetProfileUser
    status: string
    myUserId: string
    isAuthorized: boolean
    contacts: UserContactsType
}
type MapDispatchType = {
    // SetProfileUserAC: (userProfile: string) => void
    getProfileThunkCreator: (userId: string) => void
    getStatusThunkCreator: (userId: string) => void
    updateStatusThunkCreator: (status: string) => void
    getContactsThunkCreator: (userId: string) => void
    savePhotoTC: (photo: any) => void

}
type ParamsType = {
    userId: string
}
type StateDispatchType = MapStateType & MapDispatchType
type PropsType = RouteComponentProps<ParamsType> & StateDispatchType



class ProfileContainer extends React.Component<PropsType> {
    refreshProfile(){
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.myUserId
            if (!userId) {
                this.props.history.push("/login")
            }
        }
        this.props.getProfileThunkCreator(userId)
        this.props.getStatusThunkCreator(userId)
        this.props.getContactsThunkCreator(userId)
    }
    componentDidMount() {
       this.refreshProfile()
    }
    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (this.props.match.params.userId !== prevProps.match.params.userId){
            this.refreshProfile()
        }
    }

    render() {

        return (
            <div>
                <Profile {...this.props}
                         savePhoto={this.props.savePhotoTC}
                    isOwner={!this.props.match.params.userId}
                         profileUser={this.props.profileUser}
                         status={this.props.status}
                         contacts={this.props.contacts}
                         updateStatus={this.props.updateStatusThunkCreator}
                />
            </div>
        )
    }
}


const mapStateToProps = (state: RootStateType): MapStateType => {
    return {
        profileUser: getProfileUserSelector(state),
        status: getStatusSelector(state),
        myUserId: getMyUserIdSelector(state),
        isAuthorized: getIsAuthorizedSelector(state),
        contacts: getContactsSelector(state),
    }
}

export default compose<React.ComponentType>(
    // withAuthRedirectHOC,
    connect(mapStateToProps,
        {
            getProfileThunkCreator,
            getStatusThunkCreator,
            updateStatusThunkCreator,
            getContactsThunkCreator,
            savePhotoTC,
        }),
    withRouter
)(ProfileContainer)


// export const WithRouterDataContainerComponent = withRouter(ProfileContainer);
// export default withAuthRedirectHOC(connect(mapStateToProps,{getProfileThunkCreator}) (WithRouterDataContainerComponent));
