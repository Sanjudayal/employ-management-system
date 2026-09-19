import React from "react";

const AcceptTask = () => {
  return (
    <div className="bg-[#00B96B] text-white shrink-0 h-[70%] md:h-full my-auto md:my-0 w-75 rounded-xl p-5 flex flex-col justify-between">
      {/* Main Content Area */}
      <div>
        {/* Top Header Row */}
        <div className="flex justify-between items-center mb-4">
          <span className="bg-red-700 text-white text-xs font-bold px-2.5 py-1 rounded">
            High
          </span>
          <h4 className="text-xs text-white/80 font-medium">18 sep 2028</h4>
        </div>

        {/* Task Heading */}
        <h3 className="font-bold text-xl mb-2">Make a youtube video</h3>

        {/* Task Body Description */}
        <p className="text-sm leading-relaxed text-white/90">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          ullam libero quisquam. Ea, vitae et.
        </p>
      </div>

      {/* Action Buttons Row */}
      <div className="flex justify-between items-center gap-3 mt-5">
        <button className="flex-1 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold py-2 px-1 rounded transition-colors duration-200">
          Mark as Completed
        </button>
        <button className="flex-1 bg-red-700 hover:bg-red-800 text-white text-xs font-bold py-2 px-1 rounded transition-colors duration-200">
          Mark as Failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;
