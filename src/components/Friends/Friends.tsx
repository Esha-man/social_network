import React from "react";
import {FriendsType} from "../../redux/sidebar-reducer";
import {mapStateToPropsFriendsType} from "./FriendsContainer";



// type RootType = {
//     friends: Array<FriendsType>
// }

export const Friends= (props: mapStateToPropsFriendsType) => {
    /*const ava =() =>{
        if (props === "boy") {
            return avaBoy
        }
        if (props.sex === "girl") {
            return avaGirl
        }
    }*/
    const avaBoy = <img width={"25px"} src="https://static.vecteezy.com/system/resources/thumbnails/002/002/427/small/man-avatar-character-isolated-icon-free-vector.jpg" alt="boy"/>
    const avaGirl = <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTea6mpJZODj13Lvutndl6PgvULvVC3tPcreM4doidd7vHImnTOeK0HkfZIrFGeHuN_aJc&usqp=CAU" alt="girl"/>

    let friendsItems = props.friends.map(fr => <div key={fr.id}>{avaBoy}{fr.name}</div>)

    return (
        <div className={"friends_body"}>
            {friendsItems}
        </div>
    )


}