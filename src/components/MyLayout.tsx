import React, { useState } from 'react'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  DashboardOutlined,
  CloudOutlined,
  BulbOutlined,
  AimOutlined,
  DatabaseOutlined,
} from '@ant-design/icons'
import { Layout, Menu, Button, theme, Dropdown, Space } from 'antd'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo.jpg'

const { Header, Sider, Content } = Layout

const MyLayout: React.FC = ({ children }: any) => {
  const [collapsed, setCollapsed] = useState(false)
  const navigate = useNavigate()
  const {
    token: { colorBgContainer },
  } = theme.useToken()

  return (
    <Layout style={{ width: '100vw', height: '100vh' }}>
      <Sider trigger={null} collapsible collapsed={collapsed} theme="light">
        <div className="logo">
          <img src={logo} alt="LOGO" />
        </div>
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={['1']}
          onClick={({ key }) => {
            navigate(key)
          }}
          items={[
            {
              key: '/admin/dashboard',
              icon: <DashboardOutlined />,
              label: '看板',
            },
            {
              key: '/admin/usercenter',
              icon: <UserOutlined />,
              label: '用户中心',
              children: [
                {
                  label: '用户列表',
                  key: '/admin/users/userlist',
                  icon: <BulbOutlined />,
                },
                {
                  label: '密码列表',
                  key: '/admin/users/password',
                  icon: <AimOutlined />,
                },
              ],
            },
            {
              key: '/admin/datacenter',
              icon: <CloudOutlined />,
              label: '资产中心',
              children: [
                {
                  label: '数据A',
                  key: '/admin/assets/dataA',
                  icon: <DatabaseOutlined />,
                },
                {
                  label: '数据B',
                  key: '/admin/assets/dataB',
                  icon: <DatabaseOutlined />,
                },
                {
                  label: '数据C',
                  key: '/admin/assets/dataC',
                  icon: <DatabaseOutlined />,
                },
              ],
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
          <span className="app-title">数据管理平台</span>
          <Dropdown
            className="admin"
            menu={{
              items: [
                {
                  key: 'userCenter',
                  label: '个人中心',
                },
                {
                  key: 'logOut',
                  danger: true,
                  label: '退出',
                },
              ],
            }}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>管理员</Space>
            </a>
          </Dropdown>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}>
          {children}
        </Content>
      </Layout>
    </Layout>
  )
}

export default MyLayout
