

import React from "react"
import Layout from "../../general/components/Layout"



// markup
const HomePage = () => {


    return (
        <React.Fragment>
            <Layout>
                <div className="p-4">
                  <div className="text-lg flex justify-center items-center" style={{ height : '90vh' }}>
                    Welcome to One Bot!
                  </div>
                </div>
            </Layout>
        </React.Fragment>
    )
}

export default HomePage
