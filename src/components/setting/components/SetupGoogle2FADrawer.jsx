

import { LeftOutlined } from "@ant-design/icons"
import { Button, Drawer, Form, Input, message, Spin } from "antd"
import { useForm } from "antd/lib/form/Form"
import copy from 'copy-to-clipboard'
import { navigate } from "gatsby"
import { get } from "lodash"
import QrCode from "qrcode.react"
import React, { useEffect, useState } from "react"
import { connect } from 'react-redux'
import getGoogle2FAQrCodeAPI from "../../../api/authentication/getGoogle2FAQrCodeAPI"
import { logoutSuccessful } from "../../../redux/actions/user-actions"
import { routes } from "../../../route"



// markup
const SetupGoogle2FADrawer = (props) => {

    const [visible, setVisible] = useState(false);
    const [qrCodeVisible, setQrCodeVisible] = useState(false);
    const isAuthenticated = get(props.user, 'isAuthenticated');
    const accessKey = get(props.user, 'accessKey');
    const [form] = useForm();

    const [qrCode, setQrCode] = useState('');
    const [secretKey, setSecretKey] = useState('');

    useEffect(() => {
        setVisible(props.visible === true)
    }, [props.visible])

    useEffect(() => {
        console.log(qrCode);
    }, [qrCode])

    useEffect(() => {

        getGoogle2FAQrCodeAPI(accessKey).then(res => {
            setQrCode(get(res, 'data.data.qrCode'));
            setSecretKey(get(res, 'data.data.secretKey'))
        }).catch(err => {
            message.error(err.message)
        });
    }, [accessKey])


    function close() {
        if (props.onClose) {
            props.onClose();
        } else {
            setVisible(false);
        }
    }

    if ((!isAuthenticated || !accessKey) && visible) {
        navigate(routes.setting.to());
        message.error('Access Key Not Found!');
        return <></>;
    }


    return (
        <React.Fragment>
            <Drawer
                visible={visible}
                width="100%"
                closable={false}
                onClose={() => {
                    close()
                }}
            >
                <div className="px-3 py-4">
                    <div className="flex items-center mb-10 justify-between" >
                        <span className='inline-block ' onClick={(e) => {
                            close();
                        }} >
                            <LeftOutlined className="mr-2" style={{ fontSize: 20 }} />
                            <span className=" text-black leading-none">
                                Back
                            </span>
                        </span>
                        <span className='inline-block text-sm semi-bold' >
                            设置/重置谷歌验证
                        </span>
                    </div>

                    <div className="mb-10">
                        <Form form={form}>

                            <div className="mt-5 mb-2">
                                登入密码 :
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

                    <div className="flex justify-around items-center">
                        <Button type="primary" onClick={(e) => { setQrCodeVisible(true) }}>设置</Button>
                        <Button type="danger">重置</Button>
                    </div>
                </div>
            </Drawer>

            <Drawer
                visible={qrCodeVisible}
                width="100%"
                closable={false}
                onClose={() => {
                    setQrCodeVisible(false)
                }}
            >

                <div className="px-3 py-4">
                    <div className="flex items-center mb-10 justify-between" >
                        <span className='inline-block ' onClick={(e) => {
                            setQrCodeVisible(false)
                        }} >
                            <LeftOutlined className="mr-2" style={{ fontSize: 20 }} />
                            <span className=" text-black leading-none">
                                Back
                            </span>
                        </span>
                        <span className='inline-block text-sm semi-bold' >
                            设置/重置谷歌验证
                        </span>
                    </div>

                    <div className="mb-10" style={{ minHeight: '50vh' }}>
                        <div className="flex justify-center items-center mb-8">
                            <Spin spinning={!qrCode}>
                                <span className='inline-block' style={{ width: 200, height: 200 }} >
                                    <QrCode
                                        value={qrCode}
                                        size={200}
                                    ></QrCode>
                                </span>
                            </Spin>
                        </div>
                        <div className="text-lg font-bold text-center mb-5">
                            {secretKey}
                        </div>
                        <div className="flex justify-center items-center">
                            <Button type="ghost" onClick={(e) => {
                                message.success('Copied');
                                copy(secretKey)
                            }}>Copy</Button>
                        </div>
                    </div>

                    <div className="flex justify-around items-center">
                        <Button type="primary" onClick={(e) => { }}>确认设置</Button>
                    </div>
                </div>

            </Drawer>
        </React.Fragment>
    )
}

const mapStateToProps = state => ({
    user: state.user
});


const mapDispatchToProps = {
    logoutSuccessful
};
export default connect(mapStateToProps, mapDispatchToProps)(SetupGoogle2FADrawer)
