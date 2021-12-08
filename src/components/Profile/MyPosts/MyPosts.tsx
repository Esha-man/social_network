import React, {ChangeEvent} from "react";
import style from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {ProfilePropsType} from "./MyPostsContainer";
import {MyPostsType} from "../../../redux/profile-reducer";
import {useFormik} from "formik";
import { TextareaForm } from "../../commons/TextareaForm/TextareaForm";
// import { TextareaForm } from "../../commons/TextareaForm/TextareaForm";


export const MyPosts = (props: ProfilePropsType) => {

    const myPostsDataMap = props.profile.myPostsData.map((el: MyPostsType) => <Post message={el.post}
                                                                                    likes={el.likes}/>)
    const addNewPost = (textarea: string) => {
        props.newPost(textarea)

    }

    // const changeTextarea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //     let text = e.currentTarget.value
    //     props.changeTextareaHandler(text)
    // }


    return (
        <div className={style.posts}>
            {/*<div>*/}
            {/*    <textarea onChange={changeTextarea}*/}
            {/*              value={props.profile.textAreaValue}/>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <button onClick={addNewPost}>Add post</button>*/}
            {/*</div>*/}
            <TextareaForm  clickCallback={addNewPost}/>
            <div className={style.post}>
                {myPostsDataMap}
            </div>
        </div>
    )
}

type TextareaFormType = {
    clickCallback: (textarea: string) => void
    // textareaValue: string
}
// export const TextareaForm = (props: TextareaFormType) => {
//     const formik = useFormik({
//         initialValues: {
//             textarea: "",
//         },
//         onSubmit: values => {
//             // alert(JSON.stringify(values));
//             props.clickCallback(values.textarea)
//         },
//     });
//     return (
//         <form onSubmit={formik.handleSubmit}>
//             <label htmlFor="textarea">My posts</label>
//             <div>
//                 <textarea
//                     placeholder="Add text"
//                     id="textarea"
//                     name="textarea"
//                     // type="textarea"
//                     onChange={formik.handleChange}
//                     value={formik.values.textarea}
//                 />
//             </div>
//             <button type="submit">Add post</button>
//         </form>
//     );
// }




// import React, {ChangeEvent} from "react";
// import style from "./MyPosts.module.css"
// import {Post} from "./Post/Post";
// import {ProfilePropsType} from "./MyPostsContainer";
// import {MyPostsType} from "../../../redux/profile-reducer";
// import {useFormik} from "formik";
//
//
// export const MyPosts = (props: ProfilePropsType) => {
//
//     const myPostsDataMap = props.profile.myPostsData.map((el: MyPostsType) => <Post message={el.post}
//                                                                                     likes={el.likes}/>)
//
//
//     const startNewPost = () => {
//         props.newPost()
//
//     }
//
//     const changeTextarea = (e: ChangeEvent<HTMLTextAreaElement>) => {
//         let text = e.currentTarget.value
//         props.changeTextareaHandler(text)
//     }
//
//
//     return (
//         <div className={style.posts}>
//
//
//             <div>
//                 <textarea onChange={changeTextarea}
//                           value={props.profile.textAreaValue}/>
//             </div>
//             <div>
//                 <button onClick={startNewPost}>Add post</button>
//                 {/*<button>Remove post</button>*/}
//             </div>
//             <TextareaForm/>
//             <div className={style.post}>
//                 {myPostsDataMap}
//             </div>
//
//         </div>
//     )
// }

