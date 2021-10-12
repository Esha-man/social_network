import * as React from "react";
import {Profile} from "./Profile";
import {getProfileThunkCreator, SetProfileUserAC} from "../../redux/profile-reducer";
import { connect } from "react-redux";
import {RootStoreType} from "../../redux/redux-store";
import {withRouter, RouteComponentProps} from "react-router-dom";
import {usersAPI} from "../../api/api";

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
                <Profile {...this.props} profileUser={this.props.profileUser}/>
            </div>
        )
    }
}

const mapStateToProps = (state: RootStoreType): MapStateType => ({
  profileUser: state.profile.profileUser
})

export  const WithRouterDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps,
    {
        // SetProfileUserAC,
        getProfileThunkCreator,
    }) (WithRouterDataContainerComponent);
