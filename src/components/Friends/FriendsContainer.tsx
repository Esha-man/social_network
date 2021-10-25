import {Friends} from "./Friends";
import {connect} from "react-redux";
import {FriendsType} from "../../redux/sidebar-reducer";
import {RootStoreType} from "../../redux/redux-store";



export type mapStateToPropsFriendsType = {
    friends: Array<FriendsType>
}



const mapStateToProps = (state: RootStoreType) => {
    return {
        friends: state.sidebarContent.friends
    }
}


export const FriendsContainer = connect(mapStateToProps)(Friends)