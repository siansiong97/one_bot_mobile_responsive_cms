import * as React from "react"
import SharedHeader from "../components/general/components/SharedHeader"
import HomePage from "../components/homepage/pages/HomePage"


// markup
const IndexPage = () => {
  return (
    <React.Fragment>
      <SharedHeader />
      <HomePage />
    </React.Fragment>
  )
}

export default IndexPage
