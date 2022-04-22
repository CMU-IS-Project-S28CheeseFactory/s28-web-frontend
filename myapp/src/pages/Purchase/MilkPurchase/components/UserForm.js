import React, { forwardRef } from 'react'
import { Form, Input, Select } from 'antd'

const { Option } = Select

const UserForm = forwardRef((props, ref) => {
    return (
        <Form
            ref={ref}
            layout="vertical"
        >
            <Form.Item
                name="username"
                label="username"
                rules={[{ required: true, message: 'Please input the username!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="password"
                label="password"
                rules={[{ required: true, message: 'Please input the password!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="roleId"
                label="role"
                rules={[{ required: true, message: 'Please select the role!' }]}
            >
                <Select>
                    {
                        props.roleList.map(item =>
                            <Option value={item.id} key={item.id}>{item.roleName}</Option>
                        )
                    }
                </Select>
            </Form.Item>
        </Form>
    )
}
)

export default UserForm