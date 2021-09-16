import {UsersType} from "./UsersContainer";
// import styles from './users.module.css'
// import {v1} from "uuid";
// import * as axios from "axios";
// import avatarDefault from "../../assets/images/avatar_default.png"
//
//
// export const Users = (props: UsersType) => {
//   const getUsers = () =>   {
//         if (props.users.length === 0) {
//             axios.default.get("https://social-network.samuraijs.com/api/1.0/users")
//                 .then(response => {
//                     props.setNewUser(response.data.items)
//                 })
//         }
//     }
//     return (
//         <div>
//             <button onClick={getUsers}>Get Users</button>
//             {props.users.map(us => <div key={us.id}>
//               <span>
//                   <div><img src={us.photos.small !== null ? us.photos.small : avatarDefault}
//                             className={styles.usersAvatars}/></div>
//                   <div>{us.followed === true ? <button onClick={() => {
//                       props.unfollow(us.id)
//                   }}>Unfollow</button> : <button onClick={() => {
//                       props.follow(us.id)
//                   }}>Follow</button>}</div>
//               </span>
//                 <span>
//                   <div>{us.name}</div>
//                     <div>{us.status !== null ? <span>Status: {us.status}</span> : <span></span>}</div>
//               </span>
//                 <span>
//                   <div>{"us.location.city"}</div>
//                   <div>{"us.location.country"}</div>
//               </span>
//
//
//             </div>)}
//         </div>
//     )
// }