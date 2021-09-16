import React from "react";
import style from "../Dialogs.module.css";
import {NavLink} from "react-router-dom"

export type DialogItemType = {
    name: string
    id: string
    sex: string
}



export const DialogItem = (props: DialogItemType) => {
    let path = "/dialogs/" + props.id

    const ava =() =>{
        if (props.sex === "boy") {
            return avaBoy
        }
        if (props.sex === "girl") {
            return avaGirl
        }
    }
    const avaBoy = <img src="https://static.vecteezy.com/system/resources/thumbnails/002/002/427/small/man-avatar-character-isolated-icon-free-vector.jpg" alt="boy"/>
    const avaGirl = <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTea6mpJZODj13Lvutndl6PgvULvVC3tPcreM4doidd7vHImnTOeK0HkfZIrFGeHuN_aJc&usqp=CAU" alt="girl"/>

    return (
        <div className={style.dialog}>

            <NavLink to={path} activeClassName={style.active}>{ava()}{props.name}</NavLink>
        </div>
    )
}