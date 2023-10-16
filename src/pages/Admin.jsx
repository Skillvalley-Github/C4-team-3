import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Sidebar, TopNavbar } from '../components'
import {
  Dashboard,
  Attendance,
  Addjobs,
  Employee,
  Payout,
  Profile
} from '../components/Admin'
import supabase from '../api'

// Constants imports
import { adminTopNavigation } from '../utils/dashboard_toplink'
import { adminNavigation } from '../utils/sidelinks'

export const Admin = () => {
  const [worker, setWorkers] = useState({}) //worker state
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const { adminView } = useParams()

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
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} navigation={adminNavigation} />
      <div className='flex flex-1 flex-col md:pl-64'>
        <TopNavbar setSidebarOpen={setSidebarOpen} userNavigation={adminTopNavigation} />
        <>
          {adminView === 'profile' ? (
            <Profile
              worker={worker}
              sidebarOpen={sidebarOpen}
              setSidebarOpen={setSidebarOpen}
            />
          ) : adminView === 'addjobs' ? (
            <Addjobs />
          ) : adminView === 'payout' ? (
            <Payout />
          ) : adminView === 'employee' ? (
            <Employee />
          ) : adminView === 'attendance' ? (
            <Attendance />
          ) : (
            <Dashboard />
          )}
        </>
      </div>
    </>
  )
}
