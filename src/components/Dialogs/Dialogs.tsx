import React, {ChangeEvent} from "react";
import style from "./Dialogs.module.css"

import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

import {DialogPropsType} from "./DialogsContainer";
import {DialogForm} from "./DialogForm/DialogForm";


export const Dialogs = (props: DialogPropsType) => {


    const dialogItemsMap = props.dialogs.dialogsData.map(el => <DialogItem key={el.id} name={el.name} id={el.id}
                                                                           sex={el.sex}/>)
    const messageMap = props.dialogs.messageData.map(el => <Message key={el.id} text={el.message}/>)


    const clickAddDialog = () => {
        props.addDialog(props.dialogs)
        // props.dialogs.newPostDialogs = ""
    }

    const setTextValueChange = (e: ChangeEvent<HTMLTextAreaElement>) => {

        let text = e.currentTarget.value
        props.textValueChange(text)
    }
    const sub = (values: any) => {
        alert("ssssss")
    }

    // alert(props.isAuth)
    // if (props.isAuth === false) {
    //   return  <Redirect to={"/login"}/>
    // }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogs_items}>
                {dialogItemsMap}
            </div>

            <div className={style.all_messages}>
                {messageMap}
            </div>

            <div>
                <textarea onChange={setTextValueChange} value={props.dialogs.newPostDialogs}/>
                <div>
                    <button onClick={clickAddDialog}>Add post</button>
                </div>
            </div>

            <DialogForm />
        </div>
    )
}