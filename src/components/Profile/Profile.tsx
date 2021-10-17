import React from "react";


import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

type ProfilePropsType = {
    profileUser: any
}

export const Profile = (props: ProfilePropsType) => {
debugger
    return (
        <div>
            <ProfileInfo profileUser={props.profileUser} />
            <MyPostsContainer/>
        </div>
    )
}