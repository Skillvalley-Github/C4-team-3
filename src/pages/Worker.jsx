import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
// Importing all the components
import { Sidebar, TopNavbar } from '../components'
import {
  Profile,
  Jobs,
  Payment,
  Attendance,
  Dashboard
} from '../components/Worker'
import supabase from '../api'

// Constants imports
import { workerNavigation } from '../utils/sidelinks'
import { workerTopNavigation } from '../utils/dashboard_toplink'


export const Worker = () => {
  const [worker, setWorkers] = useState({}) //worker state
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const { workerView } = useParams()

  useEffect(() => {
    async function fetchData () {
      // You can await here
      const { data, error } = await supabase.from('worker').select()
      setWorkers(data[0])
      // ...
    }
    fetchData()
  }, [])

  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} navigation={workerNavigation} />
      <div className='flex flex-1 flex-col md:pl-64'>
        <TopNavbar setSidebarOpen={setSidebarOpen} userNavigation={workerTopNavigation} />
        <>
          {workerView === 'profile' ? (
            <Profile
              worker={worker}
              sidebarOpen={sidebarOpen}
              setSidebarOpen={setSidebarOpen}
            />
          ) : workerView === 'jobs' ? (
            <Jobs />
          ) : workerView === 'payment' ? (
            <Payment />
          ) : workerView === 'payment' ? (
            <Payment />
          ) : workerView === 'attendance' ? (
            <Attendance />
          ) : (
            <Dashboard />
          )}
        </>
      </div>
    </>
  )
}
