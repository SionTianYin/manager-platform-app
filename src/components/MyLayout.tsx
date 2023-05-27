import React, { useEffect, useState } from 'react'
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
import {
  Layout,
  Menu,
  Button,
  theme,
  Dropdown,
  Space,
  message,
  Breadcrumb,
} from 'antd'
import { useNavigate, useLocation } from 'react-router-dom'
import logo from '../assets/logo.jpg'

const { Header, Sider, Content } = Layout

const sideMenuData = [
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
]

// 查找当前选中的menu菜单的值，在刷新之后仍保持当前页面
const findOpenKeys = (key: string) => {
  const result: string[] = []

  const findInfo = (arr: any) => {
    arr.forEach((item: any) => {
      if (key.includes(item.key)) {
        result.push(item.key)
        if (item.children) {
          findInfo(item.children) //递归查找当前页面刷新之后的默认选中项
        }
      }
    })
  }
  findInfo(sideMenuData)
  return result
}

// 面包屑导航, 获取当前数据的父节点及祖父节点
const findDeepPath = (key: string) => {
  const result: any = [] // 处理所有的menu，成为一维数组，从而便于面包屑
  const findInfo = (arr: any) => {
    arr.forEach((item: any) => {
      const { children, ...info } = item // 扁平化
      result.push(info)
      if (children) {
        findInfo(children) // 递归处理children节点
      }
    })
  }
  findInfo(sideMenuData)
  const tempData = result.filter((item: any) => key.includes(item.key))
  if (tempData.length > 0) {
    return [{ label: '首页', key: '/admin/dashboard' }, ...tempData]
  }
  return []
}

const MyLayout: React.FC = ({ children }: any) => {
  const [collapsed, setCollapsed] = useState(false)
  const navigate = useNavigate()
  const [breadcrumbs, setBreadcrumbs] = useState<any>([])
  const {
    token: { colorBgContainer },
  } = theme.useToken()
  const { pathname } = useLocation()
  const tmpOpenKeys = findOpenKeys(pathname)

  const handleDropdownClick = ({ key }: { key: string }) => {
    if (key === 'logOut') {
      navigate('/')
    } else if (key === 'userCenter') {
      navigate('/admin/loger')
    } else {
      message.info('暂未开通')
    }
  }

  const menu = (
    <Menu onClick={handleDropdownClick}>
      <Menu.Item key="userCenter">个人中心</Menu.Item>
      <Menu.Item key="logOut" danger>
        退出
      </Menu.Item>
    </Menu>
  )

  useEffect(() => {
    setBreadcrumbs(findDeepPath(pathname))
  }, [pathname])

  return (
    <Layout style={{ width: '100vw', height: '100vh' }}>
      <Sider trigger={null} collapsible collapsed={collapsed} theme="light">
        <div className="logo">
          <img src={logo} alt="LOGO" />
        </div>
        <Menu
          theme="light"
          mode="inline"
          defaultOpenKeys={tmpOpenKeys}
          defaultSelectedKeys={tmpOpenKeys}
          onClick={({ key }) => {
            navigate(key)
          }}
          items={sideMenuData}
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
            overlay={menu}
            className="admin"
            // onClick={({ key }) => {
            //   if (key === 'logOut') {
            //     navigate('/')
            //   } else {
            //     message.info('暂未开通')
            //   }
            // }}
            //
          >
            <a>
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
          <Breadcrumb>
            {breadcrumbs.map((item: any) => (
              <Breadcrumb.Item>{item.label}</Breadcrumb.Item>
            ))}
          </Breadcrumb>
          {children}
        </Content>
      </Layout>
    </Layout>
  )
}

export default MyLayout
