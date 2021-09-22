import styles from "./users.module.css";
import {UserType} from "../../redux/users-reducer";
import avatarDefault from "../../assets/images/avatar_default.png";
import React from "react";
import { NavLink } from "react-router-dom";


type PropsType = {
    users: Array<UserType>
    totalUsersCount: number
    currentPage: number
    pageSize: number

    onChangePage: (pageNum: number) => void
    follow: (userId: string) => void
    unfollow: (userId: string) => void
}

export const Users = (props: PropsType) => {

    let pagesCount = Math.ceil(props
        .totalUsersCount / props.pageSize);
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }


    return (
        <div>
            <div>
                {pages.map(pageNum =>

                    <span onClick={(event) => props.onChangePage(pageNum)}
                          className={props.currentPage === pageNum ? styles.selectedPage : ""}>{pageNum}</span>)}
            </div>


            {props.users.map((us: UserType) => <div key={us.id}>
              <span>
                  <div>
                      <NavLink to={"/profile/" + us.id}>
                          <img src={us.photos.small !== null ? us.photos.small :
                              avatarDefault}
                               className={styles.usersAvatars}/>
                      </NavLink>
                  </div>
                  <div>
                      {us.followed === true ? <button onClick={() => {
                          props.unfollow(us.id)
                      }}>Unfollow</button> : <button onClick={() => {
                          props.follow(us.id)
                      }}>Follow</button>}
                  </div>
              </span>
                <span>
                  <div>{us.name}</div>
                    <div>{us.status !== null ? <span>Status: {us.status}</span> :
                        <span></span>}</div>
              </span>
                <span>
                  <div>{"us.location.city"}</div>
                  <div>{"us.location.country"}</div>
              </span>


            </div>)}
        </div>
    )
}