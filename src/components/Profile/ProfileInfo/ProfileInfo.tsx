import React, {ChangeEvent} from "react";
import style from "../Profile.module.css"
import {SpinnerLoader} from "../../commons/SpinnerLoader/SpinnerLoader";
import {GetProfileUser, UserContactsType} from "../../../api/api";
import {ProfileStatusHooks} from "../ProfileStatus/ProfileStatusHooks";


type ProfileInfoPropsType = {
    profileUser: GetProfileUser
    status: string
    updateStatus: (status: string) => void
    contacts: UserContactsType
    isOwner: boolean
    savePhoto: (photo: any) => void
}

export const ProfileInfo = React.memo((props: ProfileInfoPropsType) => {


    const lookingForAJob = () => {
        return !props.profileUser.lookingForAJob ? "В поиске работы" : "Работаю"
    }

    const strCont = () => {
        return JSON.stringify(props.contacts)
    }

    const changeAvatar = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files !== null) {
            props.savePhoto(e.target.files[0])
        }
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
                    <img src={props.profileUser.photos.small
                        ?
                        props.profileUser.photos.small
                        :
                        ""}
                    />
                    <div>
                        {props.isOwner && <input type="file" onChange={changeAvatar}/>}
                    </div>
                    <ProfileStatusHooks status={props.status} updateStatus={props.updateStatus}/> {/*STATUS*/}

                    <div>{lookingForAJob()}</div>

                    <div>Контакты для связи:</div>
                    <div>{strCont()}</div>

                </div>
            </div>
        </div>
    )
})