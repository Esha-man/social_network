import {Friends} from "./Friends";
import {connect} from "react-redux";
import {FriendsType} from "../../redux/sidebar-reducer";
import {RootStateType} from "../../redux/redux-store";



export type mapStateToPropsFriendsType = {
    friends: Array<FriendsType>
}



const mapStateToProps = (state: RootStateType) => {
    return {
        friends: state.sidebarContent.friends
    }
}


export const FriendsContainer = connect(mapStateToProps)(Friends)