import React from 'react'
import {useNavigate} from 'react-router-dom'
import { Form, Button, Input, Checkbox } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import axios from 'axios'
import './login.css'
// import logo from '../../assets/logo.png'
/*
登录的路由组件
*/
export default function Login() {
  const navigate=useNavigate()

  const onFinish = (values) => {
    // console.log(values)

    axios.get(`http://localhost:8000/userlist?username=${values.username}&password=${values.password}&roleState=true&_expand=role`).then(res=> {
      // console.log(res.data)
      if (res.data.length===0) {

        
      }else{
        localStorage.setItem("token",JSON.stringify(res.data[0]))
        navigate('/')
      }
    })
  }

  return (
    <div style={{ background: 'rgb(35,39,65)', height: '100%' }}>
      <div className="formContainer">
        <div className="logintitle">S28 System</div>
        <Form
          name="normal_login"
          className="login-form"
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your Username!' }]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}