import React from "react";
import Header from "../other/Header";
import CreateTask from "../other/CreateTask";
import AllTasks from "../other/AllTasks";

const AdminDashboard = (props) => {
  return (
    <div className="px-10 py-6 min-h-dvh w-full bg-[#111111]">
      <Header data={props.data} changeUser={props.changeUser} />
      <CreateTask />
      <AllTasks />
    </div>
  );
};

export default AdminDashboard;
