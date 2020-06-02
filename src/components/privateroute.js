import React from "react"
import { navigate } from "gatsby"

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  if (!window.localStorage.getItem('github-token') && location.pathname !== `/`) {
    navigate("/")
    return null
  }

  return <Component {...rest} />
}

export default PrivateRoute