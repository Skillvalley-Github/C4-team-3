import React from "react";
import User from "../../assets/images/User.png";
import "../../App.css"; // Import your CSS file for this component

const Profile = () => {
  return (
    <div className="centered-box-container">
      <div className="centered-box">
        <form method="">
          <div className="row">
            <div className="col-md-4">
              <img src={User} alt="userimage" />
            </div>
            <div className="col-md-6">
              <div className="profile-head">
                <h2>John Doe</h2>
              </div>
              <div className="profile-id">
                <p>Worker ID: 123456789</p>
              </div>
            </div>
            <div className="col-md-2">
              {/* Add the button with the "edit-profile-button" class */}
              <button className="btn btn-primary edit-profile-button">
                Edit Profile
              </button>
            </div>
          </div>
          {/* Center the fields lower in the white box */}
          <div className="row justify-content-center"style={{marginBottom:"25px"}}>
            <div className="col-md-12 text-center" >
              <div className="profile-field" style={{ marginBottom: "20px" }}>
                <label>ID:</label>
                <span>123456</span>
              </div>
              <div className="profile-field" style={{ marginBottom: "20px" }}>
                <label>Name:</label>
                <span>John Doe</span>
              </div>
              <div className="profile-field" style={{ marginBottom: "20px" }}>
                <label>DOB:</label>
                <span>01/01/1990</span>
              </div>
              <div className="profile-field" style={{ marginBottom: "20px" }}>
                <label>Aadhar Card:</label>
                <span>1234-5678-9012</span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
