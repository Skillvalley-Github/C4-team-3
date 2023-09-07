import { Dashboard, Auth, Home } from './pages'
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
    setJobs(data)
  }
  return (
    <div className='flex h-screen w-full'>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/auth' element={<Auth />} />
        <Route exact path='/:dashboard' element={<Dashboard />} />
      </Routes>
    </div>
  )
}

export default App
