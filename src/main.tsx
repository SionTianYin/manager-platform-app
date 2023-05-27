import React from 'react'
import ReactDOM from 'react-dom/client'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import Login from './pages/login.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Router>
    <ConfigProvider locale={zhCN}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin/*" element={<App />} />
      </Routes>
      {/* <App /> */}
    </ConfigProvider>
  </Router>
)
