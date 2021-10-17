import {Redirect} from "react-router-dom";
import * as React from "react";
import {connect} from "react-redux";
import {RootStoreType} from "../redux/redux-store";
import {ComponentType} from "react";

type MapStateToPropsRedirectType = {
    isAuth: boolean
}

const mapStateToProps = (state: RootStoreType): MapStateToPropsRedirectType => {
  return {
      isAuth: state.authorization.isAuthorized,
  }
}

export function withAuthRedirectHOC<T>(Component: ComponentType<T>) {
debugger
   const RedirectComponent = (props: MapStateToPropsRedirectType) => {
    debugger
       let {isAuth, ...othersProps} = props
        if (!isAuth) {return <Redirect to={"/login"}/>}
        return <Component {...othersProps as T}/>
    }
    let ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)
    return ConnectedRedirectComponent
}