import User from '../../assets/images/User.png'
import { useEffect, useState } from 'react'
import '../../App.css'

export default function Profile (props) {
  const [worker, setWorker] = useState()
  // Destructure props to access custom data

  useEffect(() => {
    setWorker(props)
  }, [props])

  return (
    <div className='centered-box-container'>
      <div className='centered-box'>
        <form method='' className='full'>
          <div className='top full '>
            <div className='left'>
              <img
                style={{ width: 300, height: 350 }}
                src={User}
                alt='userimage'
              />
            </div>
            {/* <div className='right'>
              <div className='profile-head'>
                <p>{`Name: ${worker.first_name} ${worker.last_name}`}</p>
              </div>
              <div className='profile-id'>
                <p>Worker ID: {worker.mgnrega_id}</p>
              </div>
              <div className='profile-id'>
                <p>DOB: {worker.dob}</p>
              </div>
              <div className='profile-id'>
                <p>Email: {worker.email_id}</p>
              </div>
              <div className='profile-id'>
                <p>Aadhaar No: {worker.aadhar_no}</p>
              </div>
              <div className='profile-id'>
                <p>Bank Account No: {worker.bank_account_no}</p>
              </div>
            </div> */}
            <div className='col-md-2'>
              <button className='btn btn-primary edit-profile-button'>
                Edit Profile
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
