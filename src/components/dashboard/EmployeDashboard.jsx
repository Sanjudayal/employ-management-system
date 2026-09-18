import React from "react";
import Header from "../other/Header";
import TaskListNums from "../other/TaskListNums";
import TaskList from "../tasklist/TaskList";

const EmployeDashboard = () => {
  return (
    <>
      <div className="p-10 h-dvh w-full bg-[#1c1c1c]">
        <Header />
        <TaskListNums />
        <TaskList />
      </div>
    </>
  );
};

export default EmployeDashboard;
