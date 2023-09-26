import { useParams, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
// Importing all the components
import {
  Sidebar,
  Profile,
  Jobs,
  Payment,
  Attendance,
  Dashboard
} from "../components/Worker";
import { TopNavbar } from "../components/TopNavbar";
import supabase from "../api";

export const Worker = () => {
  const [worker, setWorkers] = useState({}); //worker state
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const { view } = useParams();

  useEffect(() => {
    async function fetchData() {
      // You can await here
      const { data, error } = await supabase.from("worker").select();
      setWorkers(data[0]);
      // ...
    }
    fetchData();
  }, []);

  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="flex flex-1 flex-col md:pl-64">
        <TopNavbar setSidebarOpen={setSidebarOpen} />
        <main>
          {view === "profile" ? (
            <Profile
              worker={worker}
              sidebarOpen={sidebarOpen}
              setSidebarOpen={setSidebarOpen}
            />
          ) : view === "jobs" ? (
            <Jobs />
          ) : view === "payment" ? (
            <Payment />
          ) : view === "dashboard" ? (
            <Dashboard/>
          ) : view === "payment" ? (
            <Payment />
          ) : view === "attendance" ? (
            <Attendance />
          ) : (
            <Navigate replace to="/" />
          )}
        </main>
      </div>
    </>
  );
};
