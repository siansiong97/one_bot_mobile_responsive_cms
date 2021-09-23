

import { UserOutlined } from "@ant-design/icons"
import { Divider } from "antd"
import { Link, navigate } from "gatsby"
import { get, map } from "lodash"
import React, { useEffect } from "react"
import { routes } from "../../../route"
import { generateDummyInt } from "../../../utilities/dummy"
import Layout from "../../general/components/Layout"
import { connect } from 'react-redux';
import { useLocation } from "@reach/router"

const menuItems = [
    {
        text: '资产管理',
        path: '/',
    },
    {
        text: '提币地址',
        path: '/',
    },
    {
        text: '充币管理',
        path: '/',
    },
    {
        text: '邀请好友',
        path: '/',
    },
    {
        text: '加入社群',
        path: '/',
    },
    {
        text: '设置',
        path: routes.setting.to(),
    },
]


// markup
const ProfilePage = (props) => {

    const location = useLocation();

    const isAuthenticated = get(props, 'user.isAuthenticated');
    const user = get(props, 'user.user');

    return (
        <React.Fragment>
            <Layout>
                <div className="px-3 py-4">
                    <div className="flex justify-start items-center bg-yellow-200 rounded px-5 py-10" onClick={(e) => {
                        if (!isAuthenticated) navigate(routes.login.to())
                    }}>
                        {
                            isAuthenticated ?
                                <React.Fragment>
                                    <UserOutlined style={{ fontSize: 40, color: 'black' }} className="mr-4" />
                                    <div >
                                        <div className="text-sm text-black semibold">
                                            {get(user, 'username')}
                                        </div>
                                        <div className="text-sm text-black semibold">
                                            {get(user, 'email')}
                                        </div>
                                    </div>
                                </React.Fragment>
                                :
                                [
                                    <UserOutlined style={{ fontSize: 40, color: 'black' }} className="mr-4" />
                                    ,
                                    <div >
                                        <div className="text-sm text-black semibold">
                                            登入 / 注册
                                        </div>
                                        <div className="text-sm text-black semibold">
                                            Sign in / Register
                                        </div>
                                    </div>
                                ]

                        }
                    </div>
                    <div className="flex justify-around items-stretch my-4">
                        <div className="bg-yellow-200 rounded px-5 py-5" style={{ width: '30%' }}>
                            <div className="text-sm text-black semibold text-center" >
                                API
                            </div>
                        </div>
                        <div className="bg-yellow-200 rounded px-5 py-5" style={{ width: '30%' }}>
                            <div className="text-sm text-black semibold text-center">
                                机器人<br></br>策略
                            </div>
                            <div className="text-sm text-black semibold text-center">
                                ROBOT
                            </div>
                        </div>
                        <div className="bg-yellow-200 rounded px-5 py-5" style={{ width: '30%' }}>
                            <div className="text-sm text-black semibold text-center">
                                自定<br></br>现货交易
                            </div>
                            <div className="text-sm text-black semibold text-center">
                                SPOT
                            </div>
                        </div>
                    </div>

                    <Divider />
                    <div className="text-sm mb-3">
                        Binance 币安交易所行情
                    </div>
                    <div className="flex justify-around items-stretch my-4">
                        <div className=" px-5 py-5" style={{ width: '30%' }}>
                            <div className="text-sm text-black semibold text-center" >
                                BTC/USDT
                            </div>
                            <div className="text-sm text-black semibold text-center">
                                {generateDummyInt(0, 10000)}
                            </div>
                        </div>
                        <div className=" px-5 py-5" style={{ width: '30%' }}>
                            <div className="text-sm text-black semibold text-center" >
                                ETH/USDT
                            </div>
                            <div className="text-sm text-black semibold text-center">
                                {generateDummyInt(0, 10000)}
                            </div>
                        </div>
                        <div className=" px-5 py-5" style={{ width: '30%' }}>
                            <div className="text-sm text-black semibold text-center" >
                                BNB/USDT
                            </div>
                            <div className="text-sm text-black semibold text-center">
                                {generateDummyInt(0, 10000)}
                            </div>
                        </div>
                    </div>
                    <Divider />

                    <div className="">
                        {
                            map(menuItems, (item, index) => {
                                return (
                                    <Link to={item.path} state={{ prevPath: location.pathname }} key={`menu-${index}`}>
                                        <div className="text-black text-sm semibold p-3 rounded bg-yellow-200 mb-2" >
                                            {item.text}
                                        </div>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
            </Layout>
        </React.Fragment>
    )
}

const mapStateToProps = state => ({
    user: state.user
});


const mapDispatchToProps = {

};
export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage)
