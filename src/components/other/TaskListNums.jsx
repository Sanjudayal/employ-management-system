import React from "react";

const TaskListNums = ({data}) => {
  return (
    <div className="flex justify-center lg:justify-between mt-10 gap-5 max-w-screen flex-wrap lg:flex-nowrap ">
      <div className="bg-[#00ADB5] py-5 px-6 lg:px-10 w-[45%] rounded-xl">
        <h2 className="text-3xl font-semibold">{data.tasks.length}</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className="bg-[#7952B3] py-5 px-6 lg:px-10 w-[45%] rounded-xl">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">Completed Task</h3>
      </div>
      <div className="bg-[#00B96B] py-5 px-6 lg:px-10 w-[45%] rounded-xl">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">Accepted Task</h3>
      </div>
      <div className="bg-[#FF5722] py-5 px-6 lg:px-10 w-[45%] rounded-xl">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">Failed Task</h3>
      </div>
    </div>
  );
};

export default TaskListNums;
