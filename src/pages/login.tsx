import React from 'react'
import { Row, Col, Card, Form, Input, Button, message } from 'antd'
import { defaultImg } from '../utils/tools'
import { useNavigate } from 'react-router-dom'
import { loginAPI } from '../services/auth'

function Login() {
  const navigate = useNavigate()
  return (
    <Row>
      <Col md={{ span: 8, push: 8 }} xs={{ span: 20, push: 2 }}>
        <img
          src={defaultImg}
          alt="logo"
          style={{
            display: 'block',
            margin: '20px auto',
            borderRadius: '5px',
            width: '10%',
          }}
        />
        <Card title="数据管理中心">
          <Form
            labelCol={{ md: { span: 4 } }}
            onFinish={async (v) => {
              const res = await loginAPI(v)
              // console.log(v)
              console.log(res)
              message.success('登录成功')
              navigate('/admin/dashboard')
            }}>
            <Form.Item
              label="用户"
              name="userName"
              rules={[{ required: true, message: '请输入用户名' }]}>
              <Input placeholder="请输入用户名" />
            </Form.Item>
            <Form.Item
              label="密码"
              name="password"
              rules={[{ required: true, message: '请输入密码' }]}>
              <Input placeholder="请输入密码" type="password" />
            </Form.Item>
            <Form.Item>
              <Button
                htmlType="submit"
                type="primary"
                style={{
                  display: 'block',
                  margin: '8px auto',
                  width: '15vw',
                }}>
                登录
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  )
}

export default Login
