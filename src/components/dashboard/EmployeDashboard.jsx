import React from "react";
import Header from "../other/Header";
import TaskListNums from "../other/TaskListNums";
import TaskList from "../tasklist/TaskList";

const EmployeDashboard = ({ data }) => {
  console.log(data);
  return (
    <>
      <div className="p-10 h-dvh w-full bg-[#1c1c1c]">
        <Header data={data} />
        <TaskListNums data={data} />
        <TaskList />
      </div>
    </>
  );
};

export default EmployeDashboard;
