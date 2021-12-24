import React from "react";
import style from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {ProfilePropsType} from "./MyPostsContainer";
import {MyPostsType} from "../../../redux/profile-reducer";
import {TextareaForm} from "../../commons/TextareaForm/TextareaForm";


export const MyPosts = React.memo((props: ProfilePropsType) => {

    const myPostsDataMap =
        props.profile.myPostsData.map(
            (el: MyPostsType) =>
                <Post message={el.post} likes={el.likes}/>).reverse() //!переворот

    const addNewPost = (textarea: string) => {
        props.newPost(textarea)

    }

    return (
        <div className={style.posts}>
            <TextareaForm clickCallback={addNewPost}/>
            <div className={style.post}>
                {myPostsDataMap}
            </div>
        </div>
    )
})

// type TextareaFormType = {
//     clickCallback: (textarea: string) => void
// }

