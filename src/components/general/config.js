import React from 'react';

import { HomeOutlined, DollarCircleOutlined, FileSearchOutlined, FileTextOutlined, UserOutlined } from '@ant-design/icons'


export const navBarItems = [
    {
        icon: <HomeOutlined style={{ color: 'white', fontSize: '25px' }} />,
        text: 'Home',
        value: 'home',
        path: '/',
    },
    {
        icon: <DollarCircleOutlined style={{ color: 'white', fontSize: '25px' }} />,
        text: 'Billing',
        value: 'billing',
        path: '/billing',
    },
    {
        icon: <FileSearchOutlined style={{ color: 'white', fontSize: '25px' }} />,
        text: 'Explore',
        value: 'explore',
        path: '/explore',
    },
    {
        icon: <FileTextOutlined style={{ color: 'white', fontSize: '25px' }} />,
        text: 'Record',
        value: 'record',
        path: '/record',
    },
    {
        icon: <UserOutlined style={{ color: 'white', fontSize: '25px' }} />,
        text: 'Profile',
        value: 'profile',
        path: '/profile',
    },
]