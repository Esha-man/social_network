import React from "react";
import style from "./Dialogs.module.css"

import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

import {DialogPropsType} from "./DialogsContainer";
import { TextareaForm } from "../commons/TextareaForm/TextareaForm";


export const Dialogs = (props: DialogPropsType) => {


    const dialogItemsMap = props.dialogs.dialogsData.map(el => <DialogItem key={el.id} name={el.name} id={el.id}
                                                                           sex={el.sex}/>)
    const messageMap = props.dialogs.messageData.map(el => <Message key={el.id} text={el.message}/>)

    const clickAddDialog = (textarea: string) => {
        props.addDialog(textarea)
    }


    return (
        <div className={style.dialogs}>
            <div className={style.dialogs_items}>
                {dialogItemsMap}
            </div>
            <div className={style.all_messages}>
                {messageMap}
            </div>
            <TextareaForm clickCallback={clickAddDialog} />
        </div>
    )
}



// type TextareaFormType = {
//     clickCallback: (textarea: string) => void
//     textareaValue: string
// }
// const TextareaForm = (props: TextareaFormType) => {
//     const formik = useFormik({
//         initialValues: {
//             textarea: props.textareaValue,
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

// export const Dialogs = (props: DialogPropsType) => {
//
//
//     const dialogItemsMap = props.dialogs.dialogsData.map(el => <DialogItem key={el.id} name={el.name} id={el.id}
//                                                                            sex={el.sex}/>)
//     const messageMap = props.dialogs.messageData.map(el => <Message key={el.id} text={el.message}/>)
//
//
//     const setTextValueChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
//         let text = e.currentTarget.value
//         props.textValueChange(text)
//     }
//
//     const clickAddDialog = () => {
//         props.addDialog(props.dialogs)
//         // props.dialogs.newPostDialogs = ""
//     }
//
//
//
//     // alert(props.isAuth)
//     // if (props.isAuth === false) {
//     //   return  <Redirect to={"/login"}/>
//     // }
//
//     return (
//         <div className={style.dialogs}>
//             <div className={style.dialogs_items}>
//                 {dialogItemsMap}
//             </div>
//
//             <div className={style.all_messages}>
//                 {messageMap}
//             </div>
//
//             <div>
//                 <textarea onChange={setTextValueChange} value={props.dialogs.newPostDialogs}/>
//                 <div>
//                     <button onClick={clickAddDialog}>Add post</button>
//                 </div>
//             </div>
//
//             {/*<TextareaForm />*/}
//         </div>
//     )
// }