import React from "react";
import Header from "../other/Header";
import TaskListNums from "../other/TaskListNums";
import TaskList from "../tasklist/TaskList";

const EmployeDashboard = (props) => {
  return (
    <>
      <div className="p-10 h-dvh w-full bg-[#1c1c1c]">
        <Header changeUser={props.changeUser} data={props.data} />
        <TaskListNums data={props.data} />
        <TaskList data={props.data} />
      </div>
    </>
  );
};

export default EmployeDashboard;
