import React, {ChangeEvent} from "react";
import style from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {ProfilePropsType} from "./MyPostsContainer";
import {MyPostsType} from "../../../redux/profile-reducer";






export const MyPosts = (props: ProfilePropsType) => {

    const myPostsDataMap = props.profile.myPostsData.map((el: MyPostsType) => <Post message={el.post}
                                                                                    likes={el.likes}/>)


    const startNewPost = () => {
        props.newPost()

    }

    const changeTextarea = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.changeTextareaHandler(text)
    }


    return (
        <div className={style.posts}>

            <div>
                My posts
            </div>

            <div>
                <textarea onChange={changeTextarea}
                          value={props.profile.textAreaValue}/>
            </div>
            <div>
                <button onClick={startNewPost}>Add post</button>
                <button>Remove post</button>
            </div>

            <div className={style.post}>

                {myPostsDataMap}


            </div>


        </div>
    )
}

