
import Sidebar from './components/Worker/Sidebar';
import Content from './components/Worker/Content';
import Jobs from './components/Worker/Jobs';
import Payment from './components/Worker/Payment';
import Tasks from './components/Worker/Tasks';
import Attendance from './components/Worker/Attendance';
import Profile from './components/Worker/Profile';
import { Router,Routes, Route, BrowserRouter} from "react-router-dom";
function App() {
 

  return (
    
    <div className='flex h-screen w-full'>

      <Sidebar />
      <Routes>
      <Route path="/Profile" element={<Profile />} />
      <Route path="/Jobs" element={<Jobs />} />
      <Route path="/Attendance" element={<Attendance />} />
      <Route path="/Payment" element={<Payment />} />
      <Route path="/Tasks" element={<Tasks />} />
       </Routes>
      <Content />

    </div>
  )
}

export default App
