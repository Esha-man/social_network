import React from "react";
import style from "../Profile.module.css"
import {SpinnerLoader} from "../../commons/SpinnerLoader/SpinnerLoader";
import avatarDefault from "../../../assets/images/avatar_default.png";
import {ProfileStatus} from "../ProfileStatus/ProfileStatus";
import {GetProfileUser, UserContactsType} from "../../../api/api";
import { ProfileStatusHooks } from "../ProfileStatus/ProfileStatusHooks";

type ProfileInfoPropsType = {
    profileUser: GetProfileUser
    status: string
    updateStatus: (status: string) => void
    contacts: UserContactsType
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {


    const lookingForAJob = () => {
        return !props.profileUser.lookingForAJob ? "В поиске работы" : "Работаю"
    }

const strCont = () => {
  return  JSON.stringify(props.contacts)
  // let obj = JSON.stringify(props.contacts)
}
// const strCont1 = () => {
//   // return  JSON.stringify(props.contacts)
//   let obj = props.contacts
//
//     let keysObj = []
//     let valuesObj = []
//     // @ts-ignore
//     for (let key in obj) {
//         // @ts-ignore
//         keysObj.push([key])
//         // @ts-ignore
//         if (obj[key] === null) {
//             valuesObj.push(`https://${keysObj}.com`)
//         } else {
//             // @ts-ignore
//             valuesObj.push(obj[key])
//         }
//
//         console.log(keysObj + ": " + valuesObj)
//     }
//
//     return `${keysObj}  ${valuesObj}`
// }


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
                    <img src={props.profileUser.photos.small
                        ? props.profileUser.photos.small
                        : avatarDefault}
                    />

                    <ProfileStatusHooks status={props.status} updateStatus={props.updateStatus}/> {/*STATUS*/}

                    <div>{lookingForAJob()}</div>

                    <div>Контакты для связи:</div>
                    <div>{strCont()}</div>

                </div>
            </div>
        </div>
    )
}