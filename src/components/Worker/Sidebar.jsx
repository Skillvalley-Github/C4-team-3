import profile from "../../assets/images/User.png";
import { Link } from "react-router-dom";

const links = [
  {
    name: "Jobs",
    icon: "hammer-outline",
    link: "/jobs",
  },
  {
    name: "Attendance",
    icon: "calendar-number-outline",
    link: "/attendance",
  },
  {
    name: "Allocated Tasks",
    icon: "barbell-outline",
    link: "/tasks",
  },
  {
    name: "Payment Slip",
    icon: "cash-outline",
    link: "/payment",
  },
];

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-[#1D2540] ">
      <div className="flex flex-col items-center justify-between h-[100%] w-full">
        <Link to="/profile">
          <div className="h-1/3 py-8">
            <div className="w-28 h-28">
              <img src={profile} alt="profile"></img>
            </div>
            <p className="text-white ">Operation Trinity</p>
          </div>
        </Link>
        <div className=" flex bg-red-500 flex-col justify-between w-full rounded-tr-[5rem] text-left  ">
          <div className="flex flex-col  pt-6 text-white gap-6  lg:px-12 ">
            {links.map((link, index) => (
              <Link to={link.link} key={index}>
                <div className="flex  items-center p-2 hover:bg-[#1D2540] rounded-lg ">
                  <ion-icon name={link.icon}></ion-icon>
                  <h6>{link.name}</h6>
                </div>
              </Link>
            ))}
          </div>

          <button className="bg-[#1D2540] py-2 px-4 mx-auto mb-4  rounded-lg text-white text-center  ">
            Logout 👋
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
