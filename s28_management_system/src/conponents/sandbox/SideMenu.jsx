import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Layout, Menu } from 'antd';
import {
    UserOutlined,
    TableOutlined,
    UploadOutlined,
    HomeOutlined
} from '@ant-design/icons';
import axios from 'axios';
import './index.css'
import Routes from '../../routes'

const { Sider } = Layout;
const { SubMenu } = Menu

// 路由的数组
// const menuList=[
//     {
//         key:"home",
//         title:"Home",
//         icon:<HomeOutlined />
//     },
//     {
//         key:"users",
//         title:"Users",
//         icon:<UserOutlined />,
//         children:[
//             {
//                 key:"userlist",
//                 title:"User List",
//                 icon:<UserOutlined />
//             }
//         ]
//     },
//     {
//         key:"tables",
//         title:"Tables",
//         icon:<TableOutlined />,
//         children:[
//             {
//                 key:"table1",
//                 title:"Table 1",
//                 icon:<TableOutlined />
//             }
//         ]
//     }
// ]

const iconList = {
    "/home": <HomeOutlined />,
    "/users": <UserOutlined />,
    "/tables": <TableOutlined />
}

export default function SideMenu() {
    const navigate = useNavigate();
    const [menu, setMenu] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/rights?_embed=children").then(res => {
            // console.log(res.data);
            setMenu(res.data)
        })
    })

    const {role:{rights}}=JSON.parse(localStorage.getItem("token"))

    const checkPagePermission = (item) => {
        return item.pagepermisson && rights.includes(item.key)
    }

    const renderMenu = (menuList) => {
        return menuList.map((item) => {
            if (item.children?.length > 0 && checkPagePermission(item)) {// item.children?.length解决home单页问题
                return <SubMenu key={item.path} icon={iconList[item.path]} title={item.title}>
                    {/* recursion */}
                    {renderMenu(item.children)}
                </SubMenu>
            }
            return checkPagePermission(item) && <Menu.Item key={item.path} onClick={() => {
                navigate(item.path)
            }}>{item.title}</Menu.Item>
        })
    }

    const location=useLocation()
    const selectKeys = [location.pathname]
    const openKeys = ["/"+location.pathname.split("/")[1]]
    // console.log(selectKeys)
    // console.log(openKeys)
    
    return (
        <Sider trigger={null} collapsible collapsed={false}>
            <div style={{ display: 'flex', height: '100%', "flexDirection": "column" }}>
                <div className="logo" >S28 System</div>
                <div style={{ display: 'flex', "overflow":"auto"}}>
                    <Menu theme="dark" mode="inline" selectedKeys={selectKeys} defaultOpenKeys={openKeys}>
                        {renderMenu(menu)}
                    </Menu>
                </div>
            </div>

        </Sider>
    )
}
