import React, { useState, useEffect, useRef } from 'react'
import { Table, Tag, Button, Modal, Switch} from 'antd'
import { DeleteOutlined, EditOutlined, ExclamationCircleOutlined } from '@ant-design/icons'
import axios from 'axios'
import UserForm from '../../../conponents/users/UserForm'

const { confirm } = Modal;

export default function UserList() {
  const [dataSource, setDataSource] = useState([]);
  const [isAddVisible, setIsAddVisible] = useState(false);
  const [isUpdateVisible, setIsUpdateVisible] = useState(false);
  const [roleList, setRoleList] = useState([])
  const [current,setCurrent] = useState(null)
  const addForm=useRef(null)
  const updateForm=useRef(null)


  useEffect(() => {
    axios.get("http://localhost:8000/userlist?_expand=role").then(res => {
      const list = res.data
      setDataSource(list)
    })
  }, [])

  useEffect(() => {
    axios.get("http://localhost:8000/roles").then(res => {
      const list = res.data
      setRoleList(list)
    })
  }, [])

  // table columns
  const columns = [
    {
      title: 'id',
      dataIndex: 'id'
    },
    {
      title: 'username',
      dataIndex: 'username'
    },
    {
      title: 'role',
      dataIndex: 'role',
      render: (role) => {
        return role?.roleName
      }
    },
    {
      title: 'role state',
      dataIndex: 'roleState',
      render: (roleState, item) => {
        return <Switch checked={roleState} disabled={item.default} onChange={() =>handleChange(item)}></Switch>
      }
    },
    {
      title: "action",
      render: (item) => {
        return (
          <div>
            <Button type="primary" shape="circle" icon={<EditOutlined />} disabled={item.default} onClick={()=>{handleUpdate(item)}}
            />
            <Button danger type="primary" shape="circle" icon={<DeleteOutlined />} disabled={item.default} onClick={() => confirmDelete(item)}/>
          </div>
        )
      }
    }
  ];

  // for update
  const handleUpdate=(item)=>{
    // setTimeout防止异步
    setTimeout(()=>{
      setIsUpdateVisible(true)
      updateForm.current.setFieldsValue(item)
    },0)

    // 存一下当前的item给更新用
    setCurrent(item)
  }

  // for roleState
  const handleChange=(item) => {
    item.roleState=!item.roleState
    // front
    setDataSource([...dataSource])
    // database
    axios.patch(`http://localhost:8000/userlist/${item.id}`,{
      roleState: item.roleState
    })
  }

  // 确认删除对话框方法
  const confirmDelete = (item) => {
    confirm({
      title: 'Do you Want to delete?',
      icon: <ExclamationCircleOutlined />,
      // content: 'Some descriptions',
      onOk() {
        //   console.log('OK');
        deleteMethod(item)
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }

  // 删除方法
  const deleteMethod = (item) => {
    // 当前页面同步+后端数据同步
    setDataSource(dataSource.filter(data => data.id !==item.id))

    axios.delete(`http://localhost:8000/userlist/${item.id}`)
  }

  const addFormOK=() => {
    addForm.current.validateFields().then(value=>{
      setIsAddVisible(false);
      
      axios.post(`http://localhost:8000/userlist`,{
        ...value,
        "roleState":true,
        "default":false,
      }).then(res=>{
        console.log(res.data)
        setDataSource([...dataSource,{
          ...res.data,
          role:roleList.filter(item=>item.id===value.roleId)[0]
        }])
      })
    }).catch(err=>{
      console.log(err)
    })
  }

  const updateFormOK=() =>{
    updateForm.current.validateFields().then(value=>{
      setIsUpdateVisible(false);

      setDataSource(dataSource.map(item=>{
        if(item.id===current.id){
          return {
            ...item,
            ...value,
            role:roleList.filter(item=>item.id===value.roleId)[0]
          }
        }
        return item;
      }))

      axios.patch(`http://localhost:8000/userlist/${current.id}`,
      value)
    })
  }

  return (
    <div>
      <Button type="primary" onClick={()=>{setIsAddVisible(true)}}>Add users</Button>
      <Table dataSource={dataSource} columns={columns} rowKey={item => item.id} />
      {/* add users */}
      <Modal
        visible={isAddVisible}
        title="Add users"
        okText="Create"
        cancelText="Cancel"
        onCancel={()=>{
          setIsAddVisible(false)
        }}
        onOk={() => addFormOK()}
      >
        <UserForm roleList={roleList} ref={addForm}></UserForm>
      </Modal>
      {/* update users */}
      <Modal
        visible={isUpdateVisible}
        title="update users"
        okText="Update"
        cancelText="Cancel"
        onCancel={()=>{
          setIsUpdateVisible(false)
        }}
        onOk={() => updateFormOK()}
      >
        <UserForm roleList={roleList} ref={updateForm}></UserForm>
      </Modal>
    </div>
  )
}
