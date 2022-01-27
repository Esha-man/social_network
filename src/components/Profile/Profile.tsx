import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {GetProfileUser, UserContactsType} from "../../api/api";



type ProfilePropsType = {
    profileUser: GetProfileUser
    status: string
    updateStatus: (status: string) => void
    contacts: UserContactsType
    isOwner: boolean
    savePhoto: (photo: any) => void

}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo
                isOwner={props.isOwner}
                contacts={props.contacts}
                profileUser={props.profileUser}
                status={props.status}
                updateStatus={props.updateStatus}
                savePhoto={props.savePhoto}

            />
            <MyPostsContainer/>
        </div>
    )
}