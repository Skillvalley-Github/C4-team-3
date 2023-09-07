import { useParams, Navigate } from 'react-router-dom'

// Importing all the components
import {
  Sidebar,
  Profile,
  Jobs,
  Payment,
  Tasks,
  Attendance,
  Content
} from '../components/Worker'

export const Dashboard = () => {
  const { dashboard } = useParams()
  return (
    <>
      <Sidebar />
      {dashboard === 'profile' ? (
        <Profile />
      ) : dashboard === 'jobs' ? (
        <Jobs />
      ) : dashboard === 'payment' ? (
        <Payment />
      ) : dashboard === 'tasks' ? (
        <Tasks />
      ) : dashboard === 'attendance' ? (
        <Attendance />
      ) : (
        <Navigate replace to='/' />
      )}
      <Content />
    </>
  )
}
