import { Routes, Route } from 'react-router-dom'
import MyLayout from './components/MyLayout'
import Dashboard from './pages/dashboard'
import Users from './pages/users'
import Userlist from './pages/usersList/userlist'
import Password from './pages/usersList/password'
import DataA from './pages/dataCenter/dataA'
import DataB from './pages/dataCenter/dataB'
import DataC from './pages/dataCenter/dataC'

function App() {
  return (
    <MyLayout>
      <Routes>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="loger" element={<Users />} />
        <Route path="users/userlist" element={<Userlist />} />
        <Route path="users/password" element={<Password />} />
        <Route path="assets/dataA" element={<DataA />} />
        <Route path="assets/dataB" element={<DataB />} />
        <Route path="assets/dataC" element={<DataC />} />
      </Routes>
    </MyLayout>
  )
}

export default App
