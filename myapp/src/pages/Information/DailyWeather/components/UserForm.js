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
                name="MilkOrderDate"
                label="Milk Order Date"
                rules={[{ required: true, message: 'Please input the milk order date!' }]}
            >
                <DatePicker />
            </Form.Item>
            <Form.Item
                name="SupplierName"
                label="Supplier Name"
                rules={[{ required: true, message: 'Please input the Supplier Name!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="MilkBatchCode"
                label="Milk Batch Code"
                rules={[{ required: true, message: 'Please input the Milk Batch Code!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="Milk Delivery Volume"
                label="Milk Delivery Volume"
                rules={[{ required: true, message: 'Please input the Milk Delivery Volume' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="MilkDelvoTestResult"
                label="Milk Delvo Test Result"
                rules={[{ required: true, message: 'Please input the Milk Delvo Test Result' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="MilkPH"
                label="Milk PH"
                rules={[{ required: true, message: 'Please input the Milk PH' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="MilkTotalAcidity"
                label="Milk Total Acidity"
                rules={[{ required: true, message: 'Please input the Milk Total Acidity' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="MilkTempAtCollection"
                label="Milk Temp At Collection"
                rules={[{ required: true, message: 'Please input the Milk Temp At Collection' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="MilkTempAtDelivery"
                label="Milk Temp At Delivery"
                rules={[{ required: true, message: 'Please input the Milk Temp At Delivery' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="MilkFat"
                label="Milk Fat"
                rules={[{ required: true, message: 'Please input the Milk Fat' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="MilkSolidNonFat"
                label="Milk Solid Non-Fat"
                rules={[{ required: true, message: 'Please input the Milk Solid Non-Fat' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="MilkProtein"
                label="Milk Protein"
                rules={[{ required: true, message: 'Please input the Milk Protein' }]}
            >
                <Input />
            </Form.Item>
        </Form>
    )
}
)

export default UserForm