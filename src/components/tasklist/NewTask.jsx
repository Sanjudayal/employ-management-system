import React from "react";

const NewTask = ({data}) => {
  return (
    <div className=" shrink-0 h-[70%] md:h-full my-auto md:my-0 w-75 rounded-xl p-5 flex flex-col justify-between bg-[#00ADB5]  ">
      <div>
        <div className="flex justify-between items-center mb-4">
          <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
            High
          </span>
          <h4 className="text-xs font-medium">{data.date}</h4>
        </div>
        <h3 className="font-bold text-xl mb-2">{data.title}</h3>
        <p className="text-sm leading-relaxed opacity-90">
          {data.description}
        </p>
      </div>
      <div>
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold py-2 rounded transition-colors duration-200 mt-5">
          Accept Task
        </button>
      </div>
    </div>
  );
};

export default NewTask;
