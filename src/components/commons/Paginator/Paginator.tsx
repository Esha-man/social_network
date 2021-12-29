import cssStyles from "./Paginator.module.css";
import React, {useState} from "react";
import {log} from "util";


type PropsType = {
    pageSize: number
    totalItemsCount: number
    onChangePage: (pageNum: number) => void
    currentPage: number
    portionSize: number
}

export const Paginator = React.memo((props: PropsType) => {

    let pagesCount = Math.ceil(props
        .totalItemsCount / props.pageSize);
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / props.portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * props.portionSize + 1
    let rightPortionPageNumber = portionNumber * props.portionSize

    const spanType = () => {
        return {
            border: "1px solid black",
            margin: "2px"
        }
    }

    return (
        <div className={cssStyles.paginatorWrapper}>

            {portionNumber > 1 && <button style={{color: "red"}} onClick={() => {setPortionNumber(1)
            }}>START</button>}
            {portionNumber > 1 && <button style={{margin: "0 5px 0 5px"}} onClick={() => {setPortionNumber(portionNumber - 1)
            }}>PREV</button>}

            {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(pageNum =>
                    <span onClick={(event) => props.onChangePage(pageNum)}
                          className={props.currentPage === pageNum ? cssStyles.selectedPage : ""}
                          key={pageNum}
                          style={spanType()}
                    >{pageNum}
                 </span>)}
            {portionNumber < pagesCount / props.portionSize &&
                <button style={{margin: "0 5px 0 5px"}} onClick={() => {
                    setPortionNumber(portionNumber + 1)}}>NEXT</button>}
            {portionNumber < pagesCount / props.portionSize &&
                <button style={{color: "red"}} onClick={() => {setPortionNumber(pagesCount / props.portionSize)
                }}>END</button>}

        </div>
    )
})