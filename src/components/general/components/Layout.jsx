

import { useLocation } from "@reach/router"
import { Link } from "gatsby"
import { indexOf, map } from "lodash"
import React from "react"
import { navBarItems } from "../config"



// markup
const Layout = (props) => {

    const location = useLocation();
    const currentPath = location.pathname[location.pathname.length - 1] == '/' && location.pathname.length > 1 ? location.pathname.slice(0, -1) : location.pathname;
    console.log(currentPath);

    return (
        <React.Fragment>
            <div className="flex justify-center">
                <div className=" min-h-screen relative" style={{ minWidth: 300, maxWidth: 667 }}>

                    <div className="" style={{ minHeight: '90vh' }}>
                        {
                            props.children
                        }
                    </div>
                    <div className="bg-black sticky bottom-0 right-0 left-0 p-2 w-screen" style={{ maxWidth: 667 }}>
                        <div className="flex justify-around items-center">
                            {
                                map(navBarItems, (item, index) => {
                                    const isSamePath = currentPath == item.path || indexOf(item.childrenRoutes, currentPath) != -1;
                                    return <span className='inline-block mx-0.5 ' key={`navBar-${index}`} >
                                        <Link to={item.path}>
                                            <div className="flex justify-center items-center mb-2" >
                                                {
                                                    isSamePath ?
                                                        item.activeIcon
                                                        :
                                                        item.icon
                                                }
                                            </div>
                                            <div className={`text-sm ${isSamePath ? 'main-color' : 'text-white'}`}>
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
