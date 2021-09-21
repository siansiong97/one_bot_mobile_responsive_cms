import * as React from "react"
import SharedHeader from "../components/general/components/SharedHeader"
import ProfilePage from "../components/profile/pages/ProfilePage"


// markup
const IndexPage = () => {
  return (
    <React.Fragment>
      <SharedHeader />
      <ProfilePage />
    </React.Fragment>
  )
}

export default IndexPage
