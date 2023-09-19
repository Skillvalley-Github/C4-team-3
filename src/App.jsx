import { Dashboard, Auth, Home } from './pages'
import { Routes, Route } from 'react-router-dom'
import supabase from './api'
import { useState, useEffect } from 'react'
import Protected from './components/Protected'
import { Admin } from './pages/Admin'

function App () {
  const [jobs, setJobs] = useState([])
  const [isLoggedIn, setIsLoggedIn] = useState(true)

  useEffect(() => {
    getJobs()
  }, [])
  async function getJobs () {
    const { data } = await supabase.from('jobs').select()
    setJobs(data)
  }
  return (
    <div className='w-full'>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/auth' element={<Auth />} />
        <Route
          path='/admin/:dashboard'
          element={
            <Protected isSignedIn={isLoggedIn}>
              <Admin />
            </Protected>
          }
        />
        <Route
          path='/:dashboard'
          element={
            <Protected isSignedIn={isLoggedIn}>
              <Dashboard />
            </Protected>
          }
        />
      </Routes>
    </div>
  )
}

export default App
