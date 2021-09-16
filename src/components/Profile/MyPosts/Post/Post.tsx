import React from "react";
import style from "./Post.module.css"

export const Post: React.FC<PostType> = (props) => {
    return (
        <div className={style.content}>
            <div className={style.item}>
                <img
                    src="https://static.vecteezy.com/system/resources/thumbnails/001/993/889/small_2x/beautiful-latin-woman-avatar-character-icon-free-vector.jpg"
                    alt=""/>
            </div>
            <div>
                {props.message}
            </div>
            <div>
                Like {props.likes}
            </div>
        </div>

    )
}
type PostType = {
    message: string
    likes: number
}