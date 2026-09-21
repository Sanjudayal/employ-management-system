import React, { useContext } from "react";
import { authContext } from "../../context/AuthProvider";

const AllTasks = () => {
  const authData = useContext(authContext);
  return (
    <div
      id="allTasksSection"
      className="bg-[#1c1c1c] my-5  p-3 flex flex-col gap-2 overflow-x-auto"
    >
      <div className="min-w-150">
        <div className="border border-gray-800 text-gray-400 font-semibold text-xs grid grid-cols-5 py-2 px-4 rounded tracking-wide uppercase text-center items-center">
        <h2 className="text-left text-white/90">Employee Name</h2>
        <h2>New Task</h2>
        <h2>Active Task</h2>
        <h2>Completed</h2>
        <h2>Failed</h2>
      </div>
      {authData.employees.map((el, idx) => {
            return (
              <div
                key={idx}
                className="border border-gray-800 grid grid-cols-5 py-2 px-4 rounded text-center items-center text-sm"
              >
                {/* Name */}
                <h2 className="text-left font-medium text-white">
                  {el.firstName}
                </h2>
                
                {/* Sized-down Numbers with your high contrast theme colors */}
                <h3 className="text-[#00ADB5] font-semibold">
                  {el.taskNumbers.newTask}
                </h3>
                <h5 className="text-[#7952B3] font-semibold">
                  {el.taskNumbers.active}
                </h5>
                <h5 className="text-[#00B96B] font-semibold">
                  {el.taskNumbers.completed}
                </h5>
                <h5 className="text-[#FF5722] font-semibold">
                  {el.taskNumbers.faild}
                </h5>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default AllTasks;
