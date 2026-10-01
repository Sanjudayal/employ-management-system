import React from "react";
import Header from "../other/Header";
import CreateTask from "../other/CreateTask";
import AllTasks from "../other/AllTasks";
import HeaderAdmin from "../other/HeaderAdmin";

const AdminDashboard = (props) => {
  return (
    <div className="px-5 md:px-10 py-6 min-h-dvh w-full bg-[#111111]">
      <HeaderAdmin handleLogOut={props.handleLogOut} />
      <CreateTask />
      <AllTasks />
    </div>
  );
};

export default AdminDashboard;
