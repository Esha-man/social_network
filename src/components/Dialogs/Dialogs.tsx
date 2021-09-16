import React, {ChangeEvent} from "react";
import style from "./Dialogs.module.css"

import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

import {DialogPropsType} from "./DialogsContainer";




export const Dialogs = (props: DialogPropsType) => {


    const dialogItemsMap = props.dialogs.dialogsData.map(el => <DialogItem key={el.id} name={el.name} id={el.id} sex={el.sex}/>)
    const messageMap = props.dialogs.messageData.map(el => <Message key={el.id} text={el.message}/>)


    const clickAddDialog = () => {
        props.addDialog(props.dialogs)
        // props.dialogs.newPostDialogs = ""
    }

    const setTextValueChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        debugger
        let text = e.currentTarget.value
        props.textValueChange(text)


    }


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

        </div>
    )
}