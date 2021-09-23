import * as React from "react"
import SharedHeader from "../components/general/components/SharedHeader"
import LoginPage from "../components/login/pages/LoginPage"


// markup
const Login = () => {
  return (
    <React.Fragment>
      <SharedHeader />
      <LoginPage />
    </React.Fragment>
  )
}

export default Login
