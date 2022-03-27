import { Navigate } from 'react-router-dom'
import {
    UserOutlined,
    TableOutlined,
    UploadOutlined,
    HomeOutlined
} from '@ant-design/icons';
import Sandbox from '../pages/sandbox/Sandbox'
import Home from '../pages/sandbox/home/Home'
import Users from '../pages/sandbox/users/Users'
import UserList from '../pages/sandbox/users/UserList'
import Tables from '../pages/sandbox/tables/Tables'
import RightList from '../pages/sandbox/right-manage/RightList'
import RoleList from '../pages/sandbox/right-manage/RoleList'
import MilkPurchase from '../pages/sandbox/milkPurchase/MilkPurchase'
import CalciumPurchase from '../pages/sandbox/calciumPurchase/CalciumPurchase'
import Login from '../pages/login/Login'


export default [
    {
        path: '/',
        element: <Sandbox />,
        children: [
            {
                path: 'home',
                element: <Home />
            },
            {
                path: 'user-manage',
                // element: <Users />,
                children: [
                    {
                        path:'list',
                        element: <UserList />
                }
                ]
            }, 
            {
                path:'right-manage',
                children: [
                    {
                        path:'role-list',
                        element:<RoleList />
                    },
                    {
                        path:'right-list',
                        element:<RightList />
                    }
                ]
            },
            {
                path: 'tables',
                // element: <Tables />,
                children: [
                    {
                        path:"milk_purchase",
                        element: <MilkPurchase />
                    },
                    {
                        path:"calcium_purchase",
                        element: <CalciumPurchase />
                    }
                ]
            }
        ]
    },
    {
        path: '/',
        element: <Navigate to="/sandbox" />

    },
    {
        path:'/login',
        element: <Login />
    }
]