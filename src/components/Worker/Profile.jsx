import User from "../../assets/images/User.png";
import { useEffect, useState } from "react";
import "../../App.css";

export default function Profile(props) {
  const [worker, setWorker] = useState();
  // Destructure props to access custom data

  useEffect(() => {
    setWorker(props);
  }, [props]);

  return (
    <div id="profile-section" className="">
      {/* <div className="">
        <form method="" className="">
          <div className="">
            <div className="">
              <img
                style={{ width: 300, height: 350 }}
                src={User}
                alt="userimage"
              />
            </div>
            <div className="col-md-2">
              <button className="btn btn-primary edit-profile-button">
                Edit Profile
              </button>
            </div>
          </div>
        </form>
      </div> */}
    </div>
  )
}
