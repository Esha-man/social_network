import LoadingSpinner from "../../../assets/images/200w.webp";
import React from "react";

export const SpinnerLoader = (props: any) => {
    return (
        <div className={"loadingSpinner"}>
             <img src={LoadingSpinner}/>
        </div>
    )
}