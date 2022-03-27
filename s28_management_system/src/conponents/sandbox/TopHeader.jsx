import React, { useState } from 'react'
import { useNavigate,useParams } from 'react-router-dom';
import { Layout, Menu, Dropdown,Avatar } from 'antd'
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    DownOutlined,
    UserOutlined
} from '@ant-design/icons';
const { Header } = Layout


export default function TopHeader(props) {
    const navigate=useNavigate()


    const [collapsed, setCollapsed] = useState(false)
    // console.log(collapsed)

    const toggle = () => {
        setCollapsed(!collapsed)
    }

    const {role:{roleName},username}=JSON.parse(localStorage.getItem("token"))
    console.log(localStorage.getItem("token"))

    const menu = (
        <Menu>
            <Menu.Item>
                {roleName}
            </Menu.Item>
            <Menu.Item danger onClick={() =>{
                localStorage.removeItem("token")
                navigate('/login')
            }}>Logout</Menu.Item>
        </Menu>
    );

    return (
        <Header className="site-layout-background" style={{ padding: ' 0 16px' }}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: toggle,
            })}
            <div style={{ float: 'right' }}>
                <span>{username}</span>
                <Dropdown overlay={menu}>
                    <Avatar size="large" icon={<UserOutlined />} />
                </Dropdown>
            </div>

        </Header>
    )
}
