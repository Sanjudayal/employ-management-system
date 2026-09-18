import React from "react";

const CreateTask = () => {
  return (
    
      <div className="w-full max-w-6xl mt-5 bg-[#1c1c1c] p-8 rounded-lg shadow-lg">
        <form className="flex flex-col md:flex-row gap-10">
          {/* Left Column: Inputs */}
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            {/* Task Title */}
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-300 font-medium">
                Task Title
              </label>
              <input
                type="text"
                placeholder="Make a UI design"
                className="bg-transparent border border-gray-600 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-emerald-500 placeholder-gray-500 w-full"
                required
              />
            </div>

            {/* Date */}
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-300 font-medium">Date</label>
              <input
                type="date"
                className="bg-transparent border border-gray-600 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-emerald-500 text-gray-400 w-full"
                required
              />
            </div>

            {/* Assign To */}
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-300 font-medium">
                Assign to
              </label>
              <input
                type="text"
                placeholder="employee name"
                className="bg-transparent border border-gray-600 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-emerald-500 placeholder-gray-500 w-full"
                required
              />
            </div>

            {/* Category */}
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-300 font-medium">
                Category
              </label>
              <input
                type="text"
                placeholder="design, dev, etc"
                className="bg-transparent border border-gray-600 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-emerald-500 placeholder-gray-500 w-full"
                required
              />
            </div>
          </div>

          {/* Right Column: Description & Button */}
          <div className="w-full md:w-1/2 flex flex-col justify-between gap-4">
            {/* Description Textarea */}
            <div className="flex flex-col gap-1 h-full">
              <label className="text-sm text-gray-300 font-medium">
                Description
              </label>
              <textarea className="p-2 h-30 md:h-[85%]" required></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2.5 rounded-md transition duration-200 w-full mt-auto"
            >
              Create Task
            </button>
          </div>
        </form>
      </div>
    
  );
};

export default CreateTask;
