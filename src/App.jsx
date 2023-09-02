import { Sidebar, Tasks, Payment, Attendance, Jobs, Profile, Content } from './components/Worker'
import { Routes, Route } from 'react-router-dom'
function App () {
  return (
    <div className='flex h-screen w-full'>
      <Sidebar />
      <Routes>
        <Route path='/profile' element={<Profile />} />
        <Route path='/jobs' element={<Jobs />} />
        <Route path='/attendance' element={<Attendance />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/tasks' element={<Tasks />} />
      </Routes>
      <Content />
    </div>
  )
}

export default App
