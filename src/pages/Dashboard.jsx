import { useParams, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
// Importing all the components
import {
  Sidebar,
  Profile,
  Jobs,
  Payment,
  Attendance,
} from "../components/Worker";
import { TopNavbar } from "../components/TopNavbar";
import supabase from "../api";

export const Dashboard = () => {
  const [worker, setWorkers] = useState({}); //worker state
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const { dashboard } = useParams();

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
          {dashboard === "profile" ? (
            <Profile
              worker={worker}
              sidebarOpen={sidebarOpen}
              setSidebarOpen={setSidebarOpen}
            />
          ) : dashboard === "jobs" ? (
            <Jobs />
          ) : dashboard === "payment" ? (
            <Payment />
          ) : dashboard === "attendance" ? (
            <Attendance />
          ) : (
            <Navigate replace to="/" />
          )}
        </main>
      </div>
    </>
  );
};
