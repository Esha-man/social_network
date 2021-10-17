import * as React from "react";
import {Profile} from "./Profile";
import {getProfileThunkCreator} from "../../redux/profile-reducer";
import { connect } from "react-redux";
import {RootStoreType} from "../../redux/redux-store";
import {withAuthRedirectHOC} from "../../hoc/withAuthRedirectHOC";
import {RouteComponentProps, withRouter} from "react-router-dom";

type MapStateType = {
    profileUser: any
}

type MapDispatchType = {
    // SetProfileUserAC: (userProfile: string) => void
    getProfileThunkCreator: (userId: string) => void
}

type ParamsType = {
    userId: string
}

type StateDispatchType = MapStateType & MapDispatchType

type PropsType = RouteComponentProps<ParamsType> & StateDispatchType

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        debugger
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = "2"
        }
        this.props.getProfileThunkCreator(userId)
        // usersAPI.getProfile(userId).then(response => {
        //         this.props.SetProfileUserAC(response.data)
        //     })

    }

    render() {

        return (
            <div>
                <Profile {...this.props}
                         profileUser={this.props.profileUser}
                />
            </div>
        )
    }
}


const mapStateToProps = (state: RootStoreType): MapStateType => {
  return {profileUser: state.profile.profileUser}
}


export const WithRouterDataContainerComponent = withRouter(ProfileContainer);

export default withAuthRedirectHOC(connect(mapStateToProps,{getProfileThunkCreator}) (WithRouterDataContainerComponent));
