import * as React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {initialStateProfileReducerType, ProfileActionsType, SetProfileUserAC} from "../../redux/profile-reducer";
import { connect } from "react-redux";
import {RootStoreType} from "../../redux/redux-store";

type MapStateType = {
    profileUser: any
}
type MapDispatchType = {
    SetProfileUserAC: (profileUser: string) => void
}

// type ProfileContainerPropsType = MapStateType & MapDispatchType

class ProfileContainer extends React.Component<MapStateType & MapDispatchType> {
    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/18986`)
            .then(response => {
                this.props.SetProfileUserAC(response.data)

            })

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

export default connect(mapStateToProps,
    {SetProfileUserAC}) (ProfileContainer);
