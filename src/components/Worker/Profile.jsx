import React from "react";
import User from "../../assets/images/User.png";
import "../../App.css";

const Profile = (props) => {
  // Destructure props to access custom data
  const { name, workerId, dob, panCardNo, bankAccountNo } = props;

  return (
    <div className="centered-box-container">
      <div className="centered-box">
        <form method="" className="full">
          <div className="top full ">
            <div className="left">
              <img style={{width:300,height:350}} src={User} alt="userimage" />
            </div>
            <div className="right">
              <div className="profile-head">
                <p>Name: {name} John Doe</p>
              </div>
              <div className="profile-id">
                <p>Worker ID: {workerId} 123456789</p>
              </div>
              <div className="profile-id">
                <p>DOB: {dob} 04/09/1985</p>
              </div>
              <div className="profile-id">
                <p>Pan Card No: {panCardNo}123456789</p>
              </div>
              <div className="profile-id">
                <p>Bank Account No: {bankAccountNo}123456789</p>
              </div>
            </div>
            <div className="col-md-2">
              <button className="btn btn-primary edit-profile-button">
                Edit Profile
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
