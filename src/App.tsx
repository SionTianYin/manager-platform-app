import { Routes, Route } from 'react-router-dom'
import MyLayout from './components/MyLayout'
import Dashboard from './pages/dashboard'
import Logers from './pages/loger'
import Userlist from './pages/users/userlist'
import Password from './pages/users/password'
import DataA from './pages/assets/dataA'
import DataB from './pages/assets/dataB'
import DataC from './pages/assets/dataC'

function App() {
  return (
    <MyLayout>
      <Routes>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="logers" element={<Logers />} />
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
