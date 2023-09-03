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
        </form>
      </div>
    </div>
  );
};

export default Profile;
