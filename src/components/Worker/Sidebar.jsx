import profile from '../../assets/images/User.png'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='w-1/4  bg-[#1D2540] '>
      <div className='flex flex-col items-center h-[100%]'>
        <Link to='/profile'>
          <div className='h-1/3 py-8'>
            <div className='w-28 h-28'>
              <img src={profile} alt='profile'></img>
            </div>

            <p className='text-white '>Operation Trinity</p>
          </div>
        </Link>
        <div className='h-2/3 bg-[#253659] flex flex-col justify-between w-full rounded-tr-[5rem] text-left  '>
          <div className='flex flex-col  pt-6 text-white gap-6  lg:px-12 '>
            <Link to='/jobs'>
              {' '}
              <div className='flex items-center p-2 hover:bg-[#1D2540] rounded-lg '>
                <ion-icon name='hammer-outline'></ion-icon>
                <h6>Jobs</h6>
              </div>
            </Link>
            <Link to='/attendance'>
              {' '}
              <div className='flex  items-center p-2 hover:bg-[#1D2540] rounded-lg'>
                <ion-icon name='calendar-number-outline'></ion-icon>
                <h6> Attendance</h6>
              </div>{' '}
            </Link>
            <Link to='/tasks'>
              {' '}
              <div className='flex  items-center p-2 hover:bg-[#1D2540] rounded-lg'>
                <ion-icon name='barbell-outline'></ion-icon>
                <h6>Allocated Tasks</h6>
              </div>
            </Link>
            <Link to='/payment'>
              {' '}
              <div className='flex  items-center p-2 hover:bg-[#1D2540] rounded-lg'>
                <ion-icon name='cash-outline'></ion-icon>
                <h6>Payment Slip</h6>
              </div>
            </Link>
          </div>

          <button className='bg-[#1D2540] py-2 px-4 mx-auto mb-4  rounded-lg text-white text-center  '>
            Logout 👋
          </button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
