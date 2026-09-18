import React from "react";

const TaskList = () => {
  return (
    <div
      id="taskList"
      className="overflow-auto w-full  h-[53%] mt-10 p-2 flex flex-nowrap gap-5"
    >
      <div className=" shrink-0 h-[70%] md:h-full my-auto md:my-0 w-75 rounded-xl p-5 flex flex-col justify-between bg-[#0B3C41] ">
        <div>
          <div className="flex justify-between items-center mb-4">
            <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
              High
            </span>
            <h4 className="text-xs font-medium">18 sep 2028</h4>
          </div>
          <h3 className="font-bold text-xl mb-2">Make a youtube video</h3>
          <p className="text-sm leading-relaxed opacity-90">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            ullam libero quisquam. Ea, vitae et.
          </p>
        </div>
      </div>
      <div className=" shrink-0 h-[70%] md:h-full my-auto md:my-0 w-75 rounded-xl p-5 flex flex-col justify-between bg-[#2D1B4E] ">
        <div>
          <div className="flex justify-between items-center mb-4">
            <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
              High
            </span>
            <h4 className="text-xs font-medium">18 sep 2028</h4>
          </div>
          <h3 className="font-bold text-xl mb-2">Make a youtube video</h3>
          <p className="text-sm leading-relaxed opacity-90">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            ullam libero quisquam. Ea, vitae et.
          </p>
        </div>
      </div>
      <div className=" shrink-0 h-[70%] md:h-full my-auto md:my-0 w-75 rounded-xl p-5 flex flex-col justify-between bg-[#0C3823] ">
        <div>
          <div className="flex justify-between items-center mb-4">
            <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
              High
            </span>
            <h4 className="text-xs font-medium">18 sep 2028</h4>
          </div>
          <h3 className="font-bold text-xl mb-2">Make a youtube video</h3>
          <p className="text-sm leading-relaxed opacity-90">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            ullam libero quisquam. Ea, vitae et.
          </p>
        </div>
      </div>
      <div className=" shrink-0 h-[70%] md:h-full my-auto md:my-0 w-75 rounded-xl p-5 flex flex-col justify-between bg-[#4F2516]  ">
        <div>
          <div className="flex justify-between items-center mb-4">
            <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
              High
            </span>
            <h4 className="text-xs font-medium">18 sep 2028</h4>
          </div>
          <h3 className="font-bold text-xl mb-2">Make a youtube video</h3>
          <p className="text-sm leading-relaxed opacity-90">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            ullam libero quisquam. Ea, vitae et.
          </p>
        </div>
      </div>

      
    </div>
  );
};

export default TaskList;
