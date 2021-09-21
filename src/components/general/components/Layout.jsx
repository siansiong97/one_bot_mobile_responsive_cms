

import { Link } from "gatsby"
import { map } from "lodash"
import React from "react"
import { navBarItems } from "../config"



// markup
const Layout = (props) => {


    return (
        <React.Fragment>
            <div className="flex justify-center">
                <div className=" min-h-screen relative" style={{ minWidth: 300, maxWidth: 667 }}>

                    <div className="h-full">
                        {
                            props.children
                        }
                    </div>
                    <div className="bg-black sticky bottom-0 right-0 left-0 p-2 w-screen">
                        <div className="flex justify-around items-align-center">
                            {
                                map(navBarItems, (item) => {
                                    return <span className='inline-block mx-0.5 ' >
                                        <Link to={item.path}>
                                            <div className="flex justify-center items-align-center mb-2">
                                                {
                                                    item.icon
                                                }
                                            </div>
                                            <div className="text-sm text-white">
                                                {item.text}
                                            </div>
                                        </Link>
                                    </span>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Layout
