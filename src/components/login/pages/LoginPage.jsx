

import { LeftOutlined } from "@ant-design/icons"
import { useLocation } from "@reach/router"
import { Button, Form, Input, message, Spin } from "antd"
import { useForm } from "antd/lib/form/Form"
import { navigate } from "gatsby"
import forEach from "lodash.foreach"
import get from "lodash.get"
import React, { useState } from "react"
import { connect } from 'react-redux'
import loginAPI from "../../../api/authentication/loginAPI"
import { loginSuccessful } from "../../../redux/actions/user-actions"
import { routes } from "../../../route"
import Layout from "../../general/components/Layout"



// markup
const LoginPage = (props) => {

    const location = useLocation();
    const [form] = useForm();
    const [loading, setLoading] = useState(false);
    

    function submitLogin() {
        form.validateFields().then(values => {
            loginAPI(values).then(res => {
                if(get(res, 'status') == 200){
                    props.loginSuccessful(get(res, 'data.data'), get(res, 'data.data.accessKey'));
                    if(get(location, 'state.prevPath') == routes.register.to()){
                        navigate(routes.home.to());
                    }else{
                        navigate(-1);
                    }

                }else{
                    message.error('Invalid username or password');
                }
            }).catch(err => {
                console.log(err);
                message.error(err.message)
            });

        }).catch(err => {
            forEach(get(err, 'errorFields'), (item) => {
                message.error(get(item, 'errors[0]'))
            })
        });
    }

    return (
        <React.Fragment>
            <Layout>
                <Spin spinning={loading}>

                    <div className="p-4">
                        <div className="flex items-center" onClick={(e) => {
                            navigate(-1)
                        }}>
                            <LeftOutlined className="mr-2" style={{ fontSize: 20 }} />
                            <span className=" text-black leading-none">
                                Back
                            </span>
                        </div>
                        <div className="mt-10 p-5">
                            <div className="">
                                登入
                            </div>
                            <div className="">
                                Sign In
                            </div>

                            <div className="">
                                <Form form={form}>

                                    <div className="mt-5 mb-2">
                                        EMAIL :
                                    </div>
                                    <Form.Item
                                        name="email"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Email is required.'
                                            }, {
                                                type: 'email',
                                                message: 'Not an email format'
                                            }
                                        ]}
                                    >
                                        <Input placeholder="type something..." />
                                    </Form.Item>

                                    <div className="mt-5 mb-2">
                                        PASSWORD :
                                    </div>
                                    <Form.Item
                                        name="loginPass"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Password is required.'
                                            }
                                        ]}
                                    >
                                        <Input placeholder="type something..." type="password" />
                                    </Form.Item>
                                </Form>
                            </div>

                            <div className="flex justify-center items-center mt-3">
                                <Button type="primary" onClick={(e) => {
                                    submitLogin();
                                }} >登录 LOGIN</Button>
                            </div>
                            <div className="flex justify-center items-center mt-3">
                                <Button type="link" onClick={(e) => {
                                    navigate(routes.register.to())
                                }} >注册 REGISTER</Button>
                            </div>
                            <div className="flex justify-center items-center mt-3">
                                <Button className="border-yellow-300 bg-yellow-300" >DOWNLOAD APP</Button>
                            </div>
                        </div>
                    </div>
                </Spin>
            </Layout>
        </React.Fragment>
    )
}


const mapStateToProps = state => ({
    user: state.user
});


const mapDispatchToProps = {
    loginSuccessful
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
