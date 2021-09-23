

import { LeftOutlined } from "@ant-design/icons"
import { useLocation } from "@reach/router"
import { Button, Form, Input, message, Spin } from "antd"
import { useForm } from "antd/lib/form/Form"
import { Link, navigate } from "gatsby"
import forEach from "lodash.foreach"
import get from "lodash.get"
import React, { useState } from "react"
import getEmailCheckCodeAPI from "../../../api/authentication/getEmailCheckCodeAPI"
import registerAPI from "../../../api/authentication/registerAPI"
import { routes } from "../../../route"
import Layout from "../../general/components/Layout"



// markup
const RegisterPage = (props) => {

    const location = useLocation();
    const [form] = useForm();
    const [loading, setLoading] = useState(false)

    async function sendEmailVerificationCode() {

        let email = form.getFieldValue('email');
        getEmailCheckCodeAPI(email).then(res => {
            console.log(res);
        }).catch(err => {
            message.error(err.message)
        });
    }


    function submitRegister() {

        form.validateFields().then(values => {

            setLoading(true);
            registerAPI(values).then(res => {
                console.log(res);
                setLoading(false);
                form.resetFields();
                message.success('Register Successful');
            }).catch(err => {
                setLoading(false);
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
                                注册
                            </div>
                            <div className="">
                                Sign Up
                            </div>

                            <div className="">
                                <Form form={form} autoComplete="off">

                                    <div className="mt-5 mb-2">
                                        Email :
                                    </div>
                                    <Form.Item
                                        name="email"
                                        required
                                        initialValue=""
                                        rules={[{
                                            required: true,
                                            message: 'Email is required'
                                        }, {
                                            type: 'email',
                                            message: 'Not a valid email'
                                        }]}
                                    >
                                        <Input placeholder="type something..." autoComplete="off" />
                                    </Form.Item>

                                    <div className="mt-5 mb-2">
                                        Email Verification :
                                    </div>
                                    <Form.Item
                                        name="code"
                                        initialValue=""
                                    >
                                        <Input placeholder="type something..." autoComplete="off" suffix={<Button onClick={(e) => {
                                            sendEmailVerificationCode();
                                        }}>Send Code</Button>} />
                                    </Form.Item>

                                    <div className="mt-5 mb-2">
                                        Password :
                                    </div>
                                    <Form.Item
                                        name="loginPass"
                                        required
                                        initialValue=""
                                        rules={[{
                                            required: true,
                                            message: 'Password is required'
                                        }]}
                                    >
                                        <Input placeholder="type something..." type="password" autoComplete="off" />
                                    </Form.Item>

                                    <div className="mt-5 mb-2">
                                        Confirm Password :
                                    </div>
                                    <Form.Item
                                        name="loginPassS"
                                        required
                                        initialValue=""
                                        rules={[{
                                            required: true,
                                            message: 'Password Confirmation is required'
                                        }, {
                                            validator: (rule, value, callback) => {
                                                if (value != form.getFieldValue('loginPass') && value) {
                                                    callback('Password Not Matched')
                                                } else {
                                                    callback()
                                                }
                                            }
                                        }]}
                                    >
                                        <Input placeholder="type something..." type="password" autoComplete="off" />
                                    </Form.Item>


                                    <div className="mt-5 mb-2">
                                        Referral Code :
                                    </div>
                                    <Form.Item
                                        name="recomId"
                                        initialValue=""
                                    >
                                        <Input placeholder="type something..." autoComplete="off" />
                                    </Form.Item>
                                </Form>
                            </div>

                            <div className="flex justify-center items-center mt-3">
                                <Button type="primary" onClick={(e) => {
                                    submitRegister();
                                }} >注册 Register</Button>
                            </div>
                            <div className="flex justify-center items-center mt-3">
                                <Link to={routes.login.to()} state={{prevPath : location.pathname}}>
                                <Button type="link" >已有账号？ 立即登入</Button>
                                </Link>
                            </div>
                        </div>
                    </div>

                </Spin>
            </Layout>
        </React.Fragment>
    )
}

export default RegisterPage
