import { Worker, Auth, Home } from './pages'
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
    <div className='w-full h-full'>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/auth' element={<Auth />} />
        {/* Here the dashboard routes are protected */}

        <Route
          path='/admin'
          element={
            <Protected isSignedIn={isLoggedIn}>
              <Admin />
            </Protected>
          }
        >
          <Route
            path='/admin/:adminView'
            element={
              <Protected isSignedIn={isLoggedIn}>
                <Admin />
              </Protected>
            }
          />
        </Route>
        <Route
          path='/worker'
          element={
            <Protected isSignedIn={isLoggedIn}>
              <Worker />
            </Protected>
          }
        >
          <Route
            path='/worker/:workerView'
            element={
              <Protected isSignedIn={isLoggedIn}>
                <Worker />
              </Protected>
            }
          />
        </Route>
      </Routes>
    </div>
  )
}

export default App
