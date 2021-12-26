import styles from "./Paginator.module.css";
import React from "react";


type PropsType = {
    pageSize: number
    totalUsersCount: number
    onChangePage: (pageNum: number) => void
    currentPage: number
}

export const Paginator = React.memo( (props: PropsType) => {

    let pagesCount = Math.ceil(props
        .totalUsersCount / props.pageSize);
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
            <div>
                {pages.map(pageNum => <span onClick={(event) => props.onChangePage(
                        pageNum)}
                          className={props.currentPage === pageNum ? styles.selectedPage : ""}>
                        {pageNum + "."}
                 </span>)}
            </div>
    )
})