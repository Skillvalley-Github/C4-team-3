import {
  Sidebar,
  Tasks,
  Payment,
  Attendance,
  Jobs,
  Profile,
  Content
} from './components/Worker'
import { Routes, Route } from 'react-router-dom'
import supabase from './api'
import { useState, useEffect } from 'react'

function App () {
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    getJobs()
  }, [])
  async function getJobs () {
    const { data } = await supabase.from('jobs').select()
    console.log(jobs)
    setJobs(data)
  }
  return (
    <div className='flex h-screen w-full'>
      <Sidebar />
      <Routes>
        <Route path='/profile' element={<Profile />} />
        <Route path='/' element={<Profile />} />
        <Route path='/jobs' element={<Jobs />} />
        <Route path='/attendance' element={<Attendance />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/tasks' element={<Tasks job={jobs} />} />
      </Routes>
      <Content />
    </div>
  )
}

export default App
