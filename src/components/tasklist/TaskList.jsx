import React from "react";
import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import NewTask from "./NewTask";
import FaildTask from "./FaildTask";

const TaskList = ({ data }) => {
  return (
    <div
      id="taskList"
      className="overflow-auto w-full  min-h-[53%] mt-10 p-2 flex flex-nowrap gap-5"
    >
      {data.tasks.map((el, idx) => {
        if (el.active) {
          return <AcceptTask key={idx} />;
        }
        if (el.newTask) {
          return <NewTask key={idx} />;
        }
        if (el.completed) {
          return <CompleteTask key={idx} />;
        }
        if (el.failed) {
          return <FaildTask key={idx} />;
        }
      })}
    </div>
  );
};

export default TaskList;
