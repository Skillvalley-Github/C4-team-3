import { Worker, Auth, Home } from './pages'
import { Routes, Route } from 'react-router-dom'
import Protected from './components/Protected'
import { Admin } from './pages/Admin'

function App () {
  return (
    <div className='w-full h-full'>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/auth' element={<Auth />} />
        {/* Here the dashboard routes are protected */}

        <Route
          path='/admin'
          element={
            <Protected >
              <Admin />
            </Protected>
          }
        >
          <Route
            path='/admin/:adminView'
            element={
              <Protected >
                <Admin />
              </Protected>
            }
          />
        </Route>
        <Route
          path='/worker'
          element={
            <Protected >
              <Worker />
            </Protected>
          }
        >
          <Route
            path='/worker/:workerView'
            element={
              <Protected >
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
