import { Button } from 'antd'
import React from 'react'
import axios from 'axios'

export default function Home() {
  // 取数据
  const ajax=()=>{
    axios.get("http://localhost:8000/MilkPurchase").then(res=>{
      console.log(res.data)
    })
  }
  return (
    <div>
      <Button type="primary" onClick={ajax}>Button</Button>
    </div>
  )
}
