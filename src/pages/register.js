import * as React from "react"
import SharedHeader from "../components/general/components/SharedHeader"
import RegisterPage from "../components/register/pages/RegisterPage"


// markup
const Register = () => {
  return (
    <React.Fragment>
      <SharedHeader />
      <RegisterPage />
    </React.Fragment>
  )
}

export default Register
