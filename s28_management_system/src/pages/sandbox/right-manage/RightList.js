import React,{useState,useEffect} from 'react'
import {Table,Tag,Button,Modal} from 'antd'
import {DeleteOutlined,EditOutlined,ExclamationCircleOutlined} from '@ant-design/icons'
import axios from 'axios'

const { confirm } = Modal;

export default function RightList() {
    const [dataSource,setDataSource] =useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8000/rights?_embed=children").then(res=>{
            const list=res.data
            // list[0].children=""
            list.forEach(item=>{
                if(item.children.length===0){
                    item.children=""
                }
            })
            setDataSource(list)
        })
    },[])

    const columns =[
        {
            title: 'id',
            dataIndex: 'id'
        },
        {
            title: 'title',
            dataIndex: 'title'
        },
        {
            title: 'path',
            dataIndex: 'path',
            render:(path)=>{
                return <Tag color="orange">{path}</Tag>
            }
        },
        {
            title:"action",
            render:(item)=>{
                return (
                    <div>
                    <Button type="primary" shape="circle" icon={<EditOutlined />} 
                    />
                    <Button danger type="primary" shape="circle" icon={<DeleteOutlined />} onClick={()=>confirmDelete(item)}/>
                </div>
                )
            }
        }
    ]

    // 确认删除对话框方法
    const confirmDelete=(item)=>{
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
    const deleteMethod=(item)=>{
        console.log(item)
        if(item.grade ===1){
            setDataSource(dataSource.filter(data=>data.id!==item.id))
            axios.delete(`http://localhost:8000/rights/${item.id}`)
        }else{//二级菜单
            let list=dataSource.filter(data=>data.id===item.rightId)
            // console.log(list[0].children)
            list[0].children=list[0].children.filter(data=>data.id!==item.id)
            // console.log(list,dataSource)
            setDataSource([...dataSource])
            axios.delete(`http://localhost:8000/children/${item.id}`)
        }

    }

  return (
    <div>
        <Table dataSource={dataSource} columns={columns} />
    </div>
  )
}
