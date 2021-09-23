

import { LeftOutlined, LogoutOutlined, ToolFilled } from "@ant-design/icons"
import { Button, Divider, message } from "antd"
import { navigate } from "gatsby"
import { get } from "lodash"
import React, { useEffect, useState } from "react"
import { connect } from 'react-redux'
import { logoutSuccessful } from "../../../redux/actions/user-actions"
import { routes } from "../../../route"
import Layout from "../../general/components/Layout"
import SetupGoogle2FADrawer from "../components/SetupGoogle2FADrawer"


// markup
const SettingPage = (props) => {

    const isAuthenticated = get(props, 'user.isAuthenticated');
    const user = get(props, 'user.user');

    const [google2FAVisible, setGoogle2FAVisible] = useState(false);

    useEffect(() => {
        console.log(props);
    }, [])

    if (!isAuthenticated) {
        navigate(routes.login.to());
        message.error('Please Login to proceed');
        return <></>;
    }

    function logout() {
        props.logoutSuccessful();
        message.success('Logout Successful!')
        navigate(routes.home.to())
    }

    return (
        <React.Fragment>
            <Layout>
                <div className="px-3 py-4">
                    <div className="flex items-center mb-10 justify-between" >
                        <span className='inline-block ' onClick={(e) => {
                            navigate(-1)
                        }} >
                            <LeftOutlined className="mr-2" style={{ fontSize: 20 }} />
                            <span className=" text-black leading-none">
                                Back
                            </span>
                        </span>
                        <span className='inline-block text-sm semi-bold' >
                            个人设置 USER SETTING
                        </span>
                    </div>

                    <div className="flex justify-between items-center mb-5 px-2">
                        <span className='inline-block' >
                            邮箱
                        </span>
                        <span className='inline-block ' >
                            {get(user, 'email')}
                        </span>
                    </div>
                    <div className="flex justify-between items-center px-2">
                        <span className='inline-block' >
                            用户名 USERNAME
                        </span>
                        <span className='inline-block ' >
                            {get(user, 'username')}
                        </span>
                    </div>
                    <Divider />
                    <div className="flex justify-between items-center mb-5 px-2">
                        <span className='inline-block' >
                            谷歌验证 Google/2FA
                        </span>
                        <span className='inline-block ' >
                            <ToolFilled onClick={(e) => { setGoogle2FAVisible(true)}} />
                        </span>
                    </div>
                    <div className="flex justify-between items-center mb-5 px-2">
                        <span className='inline-block' >
                            登入密码
                        </span>
                        <span className='inline-block ' >
                            <ToolFilled />
                        </span>
                    </div>
                    <div className="flex justify-between items-center mb-5 px-2">
                        <span className='inline-block' >
                            支付密码
                        </span>
                        <span className='inline-block ' >
                            <ToolFilled />
                        </span>
                    </div>
                    <Divider />
                    <div className="flex justify-between items-center mb-5 px-2">
                        <span className='inline-block' >
                            支付方式
                        </span>
                        <span className='inline-block ' >
                            <Button>中国 CNY</Button>
                        </span>
                    </div>
                    <div className="flex justify-between items-center mb-5 px-2">
                        <span className='inline-block' >
                            语言
                        </span>
                        <span className='inline-block ' >
                            <Button>中文</Button>
                        </span>
                    </div>
                    <Divider />
                    <div className="flex justify-between items-center mb-5 px-2" onClick={(e) => {
                        logout();
                    }}>
                        <span className='inline-block' >
                            登出 LOGOUT
                        </span>
                        <LogoutOutlined className="mr-5" />
                    </div>
                </div>



                <SetupGoogle2FADrawer
                    visible={google2FAVisible}
                    onClose={() => {
                        setGoogle2FAVisible(false);
                    }}
                >

                </SetupGoogle2FADrawer>
            </Layout>
        </React.Fragment>
    )
}

const mapStateToProps = state => ({
    user: state.user
});


const mapDispatchToProps = {
    logoutSuccessful
};
export default connect(mapStateToProps, mapDispatchToProps)(SettingPage)
