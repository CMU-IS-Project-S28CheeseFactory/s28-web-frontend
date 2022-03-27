import React, { useEffect }from 'react'
import {Route,Routes,Outlet} from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd';
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import SideMenu from '../../conponents/sandbox/SideMenu'
import TopHeader from '../../conponents/sandbox/TopHeader'
import './Sandbox.css'
import Home from './home/Home'
const {Content}=Layout

export default function SandBox() {
    // 进度条
    NProgress.start()
    useEffect(()=>{
        NProgress.done()
    })

    return (
        <Layout>
            <SideMenu/>
            <Layout>
                <TopHeader/>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        background: '#fff',
                        minHeight: 280,
                        overflow: 'auto'
                    }}
                >
                    {/* todo: 路由 */}
                    <Outlet/>
                </Content>
            </Layout>
        </Layout>
    )
}
