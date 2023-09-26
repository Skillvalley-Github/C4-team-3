// import profile from "../../assets/images/User.png";
// import { Link } from "react-router-dom";

// const links = [
//   {
//     name: "Jobs",
//     icon: "hammer-outline",
//     link: "/jobs",
//   },
//   {
//     name: "Attendance",
//     icon: "calendar-number-outline",
//     link: "/attendance",
//   },
//   {
//     name: "Allocated Tasks",
//     icon: "barbell-outline",
//     link: "/tasks",
//   },
//   {
//     name: "Payment Slip",
//     icon: "cash-outline",
//     link: "/payment",
//   },
// ];

// const Sidebar = () => {
//   return (
//     <div className="w-64 h-screen bg-[#1D2540] ">
//       <div className="flex flex-col items-center justify-between h-[100%] w-full">
//         <Link to="/profile">
//           <div className="h-1/3 py-8">
//             <div className="w-28 h-28">
//               <img src={profile} alt="profile"></img>
//             </div>
//             <p className="text-white ">Operation Trinity</p>
//           </div>
//         </Link>
//         <div className=" flex bg-red-500 flex-col justify-between w-full rounded-tr-[5rem] text-left  ">
//           <div className="flex flex-col  pt-6 text-white gap-6  lg:px-12 ">
//             {links.map((link, index) => (
//               <Link to={link.link} key={index}>
//                 <div className="flex  items-center p-2 hover:bg-[#1D2540] rounded-lg ">
//                   <ion-icon name={link.icon}></ion-icon>
//                   <h6>{link.name}</h6>
//                 </div>
//               </Link>
//             ))}
//           </div>
//           <a href="/">
//             <button className="bg-[#1D2540] py-2 px-4 mx-auto mb-4  rounded-lg text-white text-center  ">
//               Logout 👋
//             </button>
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  CalendarIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const navigation = [
  { name: "Dashboard", href: "/profile", icon: HomeIcon, current: true },
  { name: "Attendance", href: "/attendance", icon: UsersIcon, current: false },
  { name: "Jobs", href: "/jobs", icon: FolderIcon, current: false },
  { name: "Payment", href: "/payment", icon: CalendarIcon, current: false },
  { name: "Logout", href: "/", icon: CalendarIcon, current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
  return (
    <>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-40 md:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-indigo-700 pt-5 pb-4">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 right-0 -mr-12 pt-2">
                    <button
                      type="button"
                      className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                <div className="flex flex-shrink-0 items-center px-4">
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=300"
                    alt="Your Company"
                  />
                </div>
                <div className="mt-5 h-0 flex-1 overflow-y-auto">
                  <nav className="space-y-1 px-2">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-indigo-800 text-white"
                            : "text-indigo-100 hover:bg-indigo-600",
                          "group flex items-center px-2 py-2 text-base font-medium rounded-md"
                        )}
                      >
                        <item.icon
                          className="mr-4 h-6 w-6 flex-shrink-0 text-indigo-300"
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    ))}
                  </nav>
                </div>
              </Dialog.Panel>
            </Transition.Child>
            <div className="w-14 flex-shrink-0" aria-hidden="true">
              {/* Dummy element to force sidebar to shrink to fit close icon */}
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex flex-grow flex-col overflow-y-auto bg-indigo-700 pt-5">
          <div className="flex flex-shrink-0 items-center px-4">
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=300"
              alt="Your Company"
            />
          </div>
          <div className="mt-5 flex flex-1 flex-col">
            <nav className="flex-1 space-y-1 px-2 pb-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-indigo-800 text-white"
                      : "text-indigo-100 hover:bg-indigo-600",
                    "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                  )}
                >
                  <item.icon
                    className="mr-3 h-6 w-6 flex-shrink-0 text-indigo-300"
                    aria-hidden="true"
                  />
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
      {/* The */}
    </>
  );
}
