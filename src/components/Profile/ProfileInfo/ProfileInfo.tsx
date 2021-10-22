import React from "react";
import style from "../Profile.module.css"
import {SpinnerLoader} from "../../commons/SpinnerLoader/SpinnerLoader";
import avatarDefault from "../../../assets/images/avatar_default.png";
import {ProfileStatus} from "../ProfileStatus/ProfileStatus";

type ProfileInfoPropsType = {
    profileUser: any
    status: string
updateStatus: (status: string)=> void
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {


    const lookingForAJob = () => {
        if (props.profileUser.lookingForAJob === true) {
            return "В поиске работы"
        } else {
            return "Работаю"
        }
    }

    const myContacts = () => {
        let contact = props.profileUser.contacts

        let contacts = []
        // let keys =[]
        for (let key in contact) {
            if (contact[key]) {
                // contacts.push(contact[key])
                // keys.push(key)
                contacts.push(`${key}: https://www.${contact[key]}`)
                console.log(`${key}: https://www.${contact[key]}`)
            }

        }
        return contacts.map(el => <div>{el}</div>)

    }


    if (!props.profileUser) {
        return <SpinnerLoader/>
    }
    return (
        <div>
            <div>
                {/*<img
                    src="https://png.pngtree.com/thumb_back/fw800/back_our/20190622/ourmid/pngtree-green-ecological-grassland-blue-sky-background-image_221834.jpg"
                    alt=""/>*/}
            </div>
            <div className={style.description}>
                <div>
                    {props.profileUser.fullName}
                </div>
                <div>
                    <img src={props.profileUser.photos.small ? props.profileUser.photos.small : avatarDefault}/>

                    <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>  {/*STATUS*/}

                    {/*<div>{props.profileUser.aboutMe}</div>*/}
                    {/*<div>{lookingForAJob()}</div>*/}
                    {/*<div>Контакты для связи:</div>*/}

                    {/*<a href={"https://www." + myContacts()}>{myContacts()}</a>*/}
                </div>
            </div>
        </div>
    )
}