import React from "react";
import style from "../Profile.module.css"


export const ProfileInfo = () => {
    return (
        <div>
            <div>
                {/*<img
                    src="https://png.pngtree.com/thumb_back/fw800/back_our/20190622/ourmid/pngtree-green-ecological-grassland-blue-sky-background-image_221834.jpg"
                    alt=""/>*/}
            </div>
            <div className={style.description}>
            <div>
                Main content
            </div>
            <div>
                Ava + description
            </div>
            </div>
        </div>
    )
}