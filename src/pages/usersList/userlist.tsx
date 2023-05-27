import React from 'react'
import { Card, Button, Form, Table, Input } from 'antd'
import { PlusOutlined, SearchOutlined } from '@ant-design/icons'

function Userlist() {
  return (
    <Card
      title="用户列表"
      extra={
        <>
          <Button></Button>
        </>
      }>
      <Form layout="inline">
        <Form.Item label="用户名">
          <Input type="text" placeholder="请输入关键词" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" icon={<SearchOutlined />}></Button>
        </Form.Item>
      </Form>
      <Table columns={[{ title: '序号', width: 80 }]}></Table>
    </Card>
  )
}

export default Userlist
