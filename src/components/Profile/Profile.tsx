import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {GetProfileUser, UserContactsType} from "../../api/api";



type ProfilePropsType = {
    profileUser: GetProfileUser
    status: string
    updateStatus: (status: string) => void
    contacts: UserContactsType
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo
                contacts={props.contacts}
                profileUser={props.profileUser}
                status={props.status}
                updateStatus={props.updateStatus}
            />
            <MyPostsContainer/>
        </div>
    )
}