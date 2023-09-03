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
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='21'
                  viewBox='0 0 30 31'
                  fill='none'
                >
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M15 5.5C9.47714 5.5 5 9.67124 5 14.8168C5 17.7488 6.45416 20.364 8.72671 22.0719V25.6242L12.1316 23.7439C13.0403 23.997 14.003 24.1335 15 24.1335C20.5229 24.1335 25 19.9623 25 14.8168C25 9.67124 20.5229 5.5 15 5.5ZM15.9938 18.0466L13.4472 15.3137L8.47826 18.0466L13.9441 12.2081L16.5528 14.941L21.4596 12.2081L15.9938 18.0466Z'
                    fill='#C3CAD9'
                  />
                </svg>
                <h6>Jobs</h6>
              </div>
            </Link>
            <Link to='/attendance'>
              {' '}
              <div className='flex  items-center p-2 hover:bg-[#1D2540] rounded-lg'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='21'
                  viewBox='0 0 30 31'
                  fill='none'
                >
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M15 5.5C9.47714 5.5 5 9.67124 5 14.8168C5 17.7488 6.45416 20.364 8.72671 22.0719V25.6242L12.1316 23.7439C13.0403 23.997 14.003 24.1335 15 24.1335C20.5229 24.1335 25 19.9623 25 14.8168C25 9.67124 20.5229 5.5 15 5.5ZM15.9938 18.0466L13.4472 15.3137L8.47826 18.0466L13.9441 12.2081L16.5528 14.941L21.4596 12.2081L15.9938 18.0466Z'
                    fill='#C3CAD9'
                  />
                </svg>
                <h6> Attendance</h6>
              </div>{' '}
            </Link>
            <Link to='/tasks'>
              {' '}
              <div className='flex  items-center p-2 hover:bg-[#1D2540] rounded-lg'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='21'
                  viewBox='0 0 30 31'
                  fill='none'
                >
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M15 5.5C9.47714 5.5 5 9.67124 5 14.8168C5 17.7488 6.45416 20.364 8.72671 22.0719V25.6242L12.1316 23.7439C13.0403 23.997 14.003 24.1335 15 24.1335C20.5229 24.1335 25 19.9623 25 14.8168C25 9.67124 20.5229 5.5 15 5.5ZM15.9938 18.0466L13.4472 15.3137L8.47826 18.0466L13.9441 12.2081L16.5528 14.941L21.4596 12.2081L15.9938 18.0466Z'
                    fill='#C3CAD9'
                  />
                </svg>
                <h6>Allocated Tasks</h6>
              </div>
            </Link>
            <Link to='/payment'>
              {' '}
              <div className='flex  items-center p-2 hover:bg-[#1D2540] rounded-lg'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='21'
                  viewBox='0 0 30 31'
                  fill='none'
                >
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M15 5.5C9.47714 5.5 5 9.67124 5 14.8168C5 17.7488 6.45416 20.364 8.72671 22.0719V25.6242L12.1316 23.7439C13.0403 23.997 14.003 24.1335 15 24.1335C20.5229 24.1335 25 19.9623 25 14.8168C25 9.67124 20.5229 5.5 15 5.5ZM15.9938 18.0466L13.4472 15.3137L8.47826 18.0466L13.9441 12.2081L16.5528 14.941L21.4596 12.2081L15.9938 18.0466Z'
                    fill='#C3CAD9'
                  />
                </svg>
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
